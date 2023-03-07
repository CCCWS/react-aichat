import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import useTranslate from "../hooks/useTranslate";

export const Papago_client_id: string = "i296IGpXCZATeW6zzHlD";
export const Papago_client_secret: string = "kq7OwoeNtE";

const Test2 = () => {
  useEffect(() => {
    const papagoApi = async (
      source: "ko" | "en",
      target: "ko" | "en",
      value: string
    ) => {
      const api_url = "/v1/papago/n2mt";

      const options = {
        source: source,
        target: target,
        text: value,
      };

      const config = {
        baseURL:
          "https://cors-anywhere.herokuapp.com/https://openapi.naver.com",
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "x-naver-client-id": Papago_client_id,
          "x-naver-client-secret": Papago_client_secret,
        },
      };

      const res = await axios.post(api_url, options, config);
      console.log(res);
    };

    papagoApi("ko", "en", "테스트");
  }, []);

  return (
    <div>
      <Test>페이지 1</Test>
    </div>
  );
};

const Test = styled.div`
  padding: 10px;
  width: 100%;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 50px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  font-size: 50px;
`;

const Div1 = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;

const Div2 = styled.div`
  width: 100%;
  height: 100%;
  background-color: yellow;
`;

const Div3 = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
`;

const Div4 = styled.div`
  width: 100%;
  height: 100%;
  background-color: green;
`;

const Div5 = styled.div`
  width: 100%;
  height: 100%;
  background-color: orange;
`;

export default Test2;
