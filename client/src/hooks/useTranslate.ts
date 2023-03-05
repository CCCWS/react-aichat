import { useCallback, useState } from "react";
import axios from "axios";

import { Papago_client_id, Papago_client_secret } from "../ApiKey";

const useTranslate = () => {
  const [result, setResult] = useState<string>("");

  // server 사용시
  // const papagoApi = useCallback(
  //   async (source: "ko" | "en", target: "ko" | "en", value: string) => {
  //     const res = await axios.post("/api/papago/translate", {
  //       source: source,
  //       target: target,
  //       value: value,
  //       clientId: Papago_client_id,
  //       clientSecret: Papago_client_secret,
  //     });
  //     setResult(res.data.message.result.translatedText);
  //   },
  //   []
  // );

  // client만 사용시
  const papagoApi = useCallback(
    async (source: "ko" | "en", target: "ko" | "en", value: string) => {
      const api_url = "/v1/papago/n2mt";

      const options = {
        source: source,
        target: target,
        text: value,
      };

      const config = {
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "x-naver-client-id": Papago_client_id,
          "x-naver-client-secret": Papago_client_secret,
        },
      };

      const res = await axios.post(`papago${api_url}`, options, config);
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
