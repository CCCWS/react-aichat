import React, { useEffect, useState, useCallback } from "react";
import { Configuration, OpenAIApi } from "openai";

import useTranslate from "./useTranslate";

// import { Ai_ApiKey } from "../ApiKey";

const useAi = () => {
  const [response, setResponse] = useState<string>("");
  const { result: enToKr, papagoApi: enTranslate } = useTranslate();

  const onSendMessageAi = useCallback(
    (value: string, langType: "ko" | "en") => {
      const configuration = new Configuration({
        apiKey: process.env.REACT_APP_AI_KEY,
      });

      const openai = new OpenAIApi(configuration);

      openai
        .createCompletion({
          model: "text-davinci-003",
          prompt: value,
          temperature: 0.7,
          max_tokens: 256,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        })
        .then((res: any) => {
          if (langType === "ko") {
            enTranslate("en", "ko", res.data.choices[0].text);
          }

          if (langType === "en") {
            setResponse(res.data.choices[0].text);
          }
        });
    },
    [enTranslate]
  );

  useEffect(() => {
    if (enToKr.length !== 0) {
      setResponse(enToKr);
    }
  }, [enToKr]);

  return {
    response,
    onSendMessageAi,
  };
};

export default useAi;
