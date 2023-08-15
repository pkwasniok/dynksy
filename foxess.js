import { useEffect, useState } from "react";
import { digestStringAsync, CryptoDigestAlgorithm } from "expo-crypto";

const FOXESSCLOUD_URL = "https://www.foxesscloud.com/c/v0";

export const foxessCloudFetch = async (
  endpoint,
  options = { method: "GET", body: undefined, token: undefined }
) => {
  const response = await fetch(FOXESSCLOUD_URL + endpoint, {
    method: options.method,
    headers: {
      Token: options.token ? options.token : undefined,
      "Content-Type":
        options.method != "GET" && options.body
          ? "application/json"
          : undefined,
    },
    body:
      options.method != "GET" && options.body
        ? JSON.stringify(options.body)
        : undefined,
  });
  const responseBody = await response.json();
  return responseBody;
};

export const useFoxessCloud = (username, password) => {
  const [token, setToken] = useState(
    "eyJpZCI6IjMzNDVjYzExLWY3ZTktNDhhOS1hMDg1LTUwM2VkZTVjMTEwZCIsInNlY3JldCI6ImM0YWE5NzgzNzQxZGVlYWIyYjc2OTE3ZjBjNjZlNGRjNzdmNTIyMTMxODZkZDIyZGEzN2ZkNTEwYmJkZjVmMWEiLCJwYXlsb2FkIjoiSFFsdDRrNTIxdDZId3NiTkFTTjNMdWM3bEpRMG1RUmdIaWc1QVRHZUVkMjYxeGE1eDcyelBvTEIzS2VXeGR0bUxmK2JTNGI2b21JRWFSbWhuSm9ZOW9XalhJNThJWjM5VU1TakdqR2UzTFdNV1dIMTQrem1DVVZDcWFxWkQ0aFhQN0RQQWczbjgxRzFNbTJkWmlpNEJiUjlEOVY4QWZ2VE42VzI2SVlXWXNrUGZBOGtaZ21TSVFHMXZYaGZpdkFqWm5wUjBIc1NVOTkweWFFdGpESG95WmJwdWwySTVlZG8zWkhtNzRZS2Y3eHIwMTA5d1JXTTVQdnZKVjVOaDhaaiJ9"
  );
  const [status, setStatus] = useState("idle");
  const [state, setState] = useState({
    currentPower: 0,
    currentDayPowerGeneration: 0,
    currentMonthPowerGeneration: 0,
    currentYearPowerGeneration: 0,
    totalPowerGeneration: 0,
  });

  const sync = async () => {
    // Login into FoxessCloud account when not logged in already
    if (token == undefined) {
      const hash = await digestStringAsync(CryptoDigestAlgorithm.MD5, password);
      const response = await foxessCloudFetch("/user/login", {
        method: "POST",
        body: { user: username, password: hash },
      });

      if (response.errno != 0) {
        console.error("FoxessCloud error", response);
        setStatus("error");
        return;
      }

      setToken(response.result.token);
      setStatus("online");
    }

    // Fetch new data and update current state
    const response = await foxessCloudFetch(
      "/plant/earnings/detail?stationID=0f7d9693-b26c-42bc-9307-ecc08da85912",
      {
        method: "GET",
        token: token,
      }
    );

    if (response.errno != 0) {
      console.error("FoxessCloud error", response);
      setStatus("error");
      return;
    }

    setState({
      currentPower: Math.round(response.result.power * 1000),
      currentDayPowerGeneration: Math.round(
        response.result.today.generation * 1000
      ),
      currentMonthPowerGeneration: Math.round(
        response.result.month.generation * 1000
      ),
      currentYearPowerGeneration: Math.round(
        response.result.year.generation * 1000
      ),
      totalPowerGeneration: Math.round(
        response.result.cumulate.generation * 1000
      ),
    });

    setStatus("online");
  };

  if (status == "idle") {
    sync();
  }

  useEffect(() => {
    const interval = setInterval(() => {
      sync();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return { status, data: state, sync };
};
