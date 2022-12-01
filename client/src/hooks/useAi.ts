import React, { useEffect, useState, useCallback } from "react";
import { Configuration, OpenAIApi } from "openai";

import { Ai_ApiKey } from "../ApiKey.js";
import useTranslate from "./useTranslate";

const useAi = () => {
  const [response, setResponse] = useState<string>("");

  const { result: enToKr, papagoApi: enTranslate } = useTranslate();

  const onSendMessageAi = useCallback(
    (value: string) => {
      const configuration = new Configuration({
        apiKey: Ai_ApiKey,
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
          enTranslate("en", "ko", res.data.choices[0].text);
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
