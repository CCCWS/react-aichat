import React from "react";
import styled from "styled-components";
import VerticalCarousel from "./VerticalCarousel";

const Test2 = () => {
  return (
    <>
      <VerticalCarousel>
        <Div1 />
        <Div2 />
        <Div3 />
        <Div4 />
        <Div5 />
      </VerticalCarousel>
    </>
  );
};

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
