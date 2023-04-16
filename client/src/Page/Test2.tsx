import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import useTranslate from "../hooks/useTranslate";

export const Papago_client_id: string = "sFy3CrTRyfjQZcUKKL1m";
export const Papago_client_secret: string = "aPongTDG2G";

const Test2 = () => {
  useEffect(() => {
    const api = async () => {
      const res = await axios.get("api/test/test");
      console.log(res);
    };

    api();
  }, []);
  return <div>test</div>;
};

export default Test2;
