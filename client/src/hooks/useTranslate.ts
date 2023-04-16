import { useCallback, useState, useEffect } from "react";
import axios from "axios";

const useTranslate = () => {
  const [result, setResult] = useState<string>("");

  const url = process.env.NODE_ENV === "production" ? "/cloudtypeServer" : "";

  console.log(url);

  // server 사용시
  const papagoApi = useCallback(
    async (source: "ko" | "en", target: "ko" | "en", text: string) => {
      const res = await axios.post(`${url}/api/papago/translate`, {
        source: source,
        target: target,
        text: text,
      });
      setResult(res.data.message.result.translatedText);
    },
    [url]
  );

  // client만 사용시
  // const papagoApi = useCallback(
  //   async (
  //     source: "ko" | "en",
  //     target: "ko" | "en",
  //     value: string,
  //     PAPAGO_CLIENT_ID: string,
  //     PAPAGO_CLIENT_SECRET: string
  //   ) => {
  //     const proxy =
  //       window.location.hostname === "localhost" ? "/papago" : "/papago_proxy";

  //     console.log(proxy);
  //     const api_url = "/v1/papago/n2mt";

  //     const options = {
  //       source: source,
  //       target: target,
  //       text: value,
  //     };

  //     const config = {
  //       baseURL: proxy,
  //       headers: {
  //         "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
  //         "x-naver-client-id": "fLDASiHmR9DJZme9ougX",
  //         "x-naver-client-secret": "tTAqQvAT_2",
  //       },
  //     };

  //     const res = await axios.post(api_url, options, config);
  //     console.log(res);
  //     setResult(res.data.message.result.translatedText);
  //   },
  //   []
  // );

  return {
    result,
    papagoApi,
  };
};

export default useTranslate;
