import { useEffect, useState } from "react";

export const tasmotaExecute = async (address, command) => {
  try {
    const response = await fetch(`http://${address}/cm?cmnd=${command}`);
    const body = await response.json();
    return body;
  } catch (e) {
    return undefined;
  }
};

export const useRelay = (address, name) => {
  const [status, setStatus] = useState("idle");
  const [state, setState] = useState({
    state: false,
  });

  const sync = async () => {
    const response = await tasmotaExecute(address, `${name}`);

    if (response == undefined) {
      setStatus("offline");
      setState({ state: false });
      return;
    }

    setStatus("online");
    setState({ state: response[name] == "ON" });
  };

  const turnOn = async () => {
    if (status == "online") {
      setState({ state: true });
    }

    await tasmotaExecute(address, `${name} 1`);
    sync();
  };

  const turnOff = async () => {
    if (status == "online") {
      setState({ state: false });
    }

    await tasmotaExecute(address, `${name} 0`);
    sync();
  };

  const toggle = async () => {
    if (status == "online") {
      setState({ state: !state.state });
    }

    await tasmotaExecute(address, `${name} 2`);
    sync();
  };

  if (status == "idle") {
    sync();
  }

  useEffect(() => {
    const interval = setInterval(() => {
      sync();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return { status, data: state, turnOn, turnOff, toggle, sync };
};
