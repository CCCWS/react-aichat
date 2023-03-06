import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import useTranslate from "../hooks/useTranslate";

export const Papago_client_id: string = "_lXQAvuTjq_l0PT8yBcA";
export const Papago_client_secret: string = "E_eU2E8D34";

const Test2 = () => {
  const { papagoApi } = useTranslate();

  // useEffect(() => {
  //   papagoApi("ko", "en", "오늘 날씨");
  // }, []);

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
