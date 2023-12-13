import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import useTranslate from "../hooks/useTranslate";

const Test2 = () => {
  useEffect(() => {
    const api = async () => {
      const res = await axios.get("/test");

      console.log(res.data);
    };

    // api();
  }, []);

  return (
    <Div
      url={
        ""
      }
    >
      test
    </Div>
  );
};

const Div = styled.div<{ url: string }>`
  width: 500px;
  height: 500px;

  background-image: ${(props) => `url(${props.url})`};
  background-position: center;
  background-size: cover;
`;

export default Test2;
