import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import useTranslate from "../hooks/useTranslate";

const url = "https://port-0-react-aichat-1maxx2algj8mzv5.sel3.cloudtype.app/";
const url2 = "http://localhost:3001/";

const Test2 = () => {
  const { result, papagoApi } = useTranslate();

  useEffect(() => {
    const api = async () => {};

    api();
  }, [papagoApi]);

  useEffect(() => {
    if (result) console.log(result);
  }, [result]);

  return <div></div>;
};

export default Test2;
