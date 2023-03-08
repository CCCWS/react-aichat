import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import useTranslate from "../hooks/useTranslate";

export const Papago_client_id: string = "i296IGpXCZATeW6zzHlD";
export const Papago_client_secret: string = "kq7OwoeNtE";

const Test2 = () => {
  // useEffect(() => {
  //   const papagoApi = async (
  //     source: "ko" | "en",
  //     target: "ko" | "en",
  //     value: string
  //   ) => {
  //     const api_url = "/v1/papago/n2mt";

  //     const options = {
  //       source: source,
  //       target: target,
  //       text: value,
  //     };

  //     const config = {
  //       baseURL:
  //         "https://cors-anywhere.herokuapp.com/https://openapi.naver.com",
  //       headers: {
  //         "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
  //         "x-naver-client-id": Papago_client_id,
  //         "x-naver-client-secret": Papago_client_secret,
  //       },
  //     };

  //     const res = await axios.post(api_url, options, config);
  //     console.log(res);
  //   };

  //   papagoApi("ko", "en", "테스트");
  // }, []);

  return (
    <Test>
      <Div>
        <div></div>
        <div></div>
        <div></div>
      </Div>
    </Test>
  );
};

const Test = styled.div`
  padding: 10px;
`;

const Div = styled.div`
  width: 100px;
  height: 50px;
  background-color: gray;

  display: flex;
  justify-content: space-around;
  align-items: flex-end;

  padding: 10px;

  div {
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 10px;

    animation-name: test;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  & > :first-child {
    animation-delay: 0s;
  }

  & > :nth-child(2) {
    animation-delay: 0.3s;
  }

  & > :nth-child(3) {
    animation-delay: 0.6s;
  }

  @keyframes test {
    0% {
      transform: translateY(0px);
    }

    25% {
      transform: translateY(-10px);
    }

    50% {
      transform: translateY(0px);
    }

    100% {
      transform: translateY(0px);
    }
  }
`;

export default Test2;
