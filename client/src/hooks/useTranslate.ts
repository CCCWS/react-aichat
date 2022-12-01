import React, { useCallback, useState } from "react";
import axios from "axios";

const useTranslate = () => {
  const [result, setResult] = useState<string>("");

  const papagoApi = useCallback(
    async (source: "ko" | "en", target: "ko" | "en", value: string) => {
      const res = await axios.post("/api/papago/translate", {
        source: source,
        target: target,
        value: value,
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
