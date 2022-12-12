import React, { useCallback, useState } from "react";
import axios from "axios";

import { Papago_client_id, Papago_client_secret } from "../ApiKey";

const useTranslate = () => {
  const [result, setResult] = useState<string>("");

  const papagoApi = useCallback(
    async (source: "ko" | "en", target: "ko" | "en", value: string) => {
      const res = await axios.post("/api/papago/translate", {
        source: source,
        target: target,
        value: value,
        clientId: Papago_client_id,
        clientSecret: Papago_client_secret,
      });
      setResult(res.data.message.result.translatedText);
    },
    []
  );

  return {
    result,
    papagoApi,
  };
};

export default useTranslate;
