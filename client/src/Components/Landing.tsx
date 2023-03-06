import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Landing = () => {
  const [view, setView] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setView(false);
    }, 1500);
  }, []);

  return (
    <Div view={view}>
      <DivImg image={process.env.PUBLIC_URL + "/image/image1.png"}></DivImg>
    </Div>
  );
};

const Div = styled.div<{ view: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #a8a8a8;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 0.5s;
  transform: ${(props) =>
    props.view ? "translateY(0%)" : "translateY(-100%)"};

  opacity: ${(props) => (props.view ? "1" : "0")};
  z-index: 99;
`;

const DivImg = styled.div<{ image: string }>`
  width: 200px;
  height: 200px;

  border-radius: 100px;

  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default Landing;
