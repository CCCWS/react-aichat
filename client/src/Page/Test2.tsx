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

    api();
  }, []);

  return <div></div>;
};

export default Test2;
