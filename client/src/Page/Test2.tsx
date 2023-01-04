import React from "react";
import styled from "styled-components";
import VerticalCarousel from "./VerticalCarousel";

const Test2 = () => {
  return (
    <VerticalCarousel delay={1000} point={true}>
      <div>
        <Test>페이지 1</Test>
      </div>

      <div></div>
    </VerticalCarousel>
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
