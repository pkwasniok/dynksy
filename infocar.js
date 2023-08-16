import { useEffect, useState } from "react";

export const useInfocar = (name, surname, pkk) => {
  const [status, setStatus] = useState("idle");
  const [state, setState] = useState(undefined);

  const sync = async () => {
    const response = await fetch(
      "https://info-car.pl/api/ssi/status/driver/driver-licence",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Patryk",
          surname: "Kwaśniok",
          pkk: "12330460609178325122",
        }),
      }
    );

    const responseBody = await response.json();

    setState({
      status: responseBody.statusHistory.slice(-1)[0].value,
      description: responseBody.statusHistory.slice(-1)[0].description,
      lastSync: new Date(),
    });

    setStatus("online");
  };

  if (status == "idle") {
    sync();
  }

  return { status, data: state, sync };
};
