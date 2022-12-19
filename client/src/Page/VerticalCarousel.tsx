import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode[];
}

const VerticalCarousel = ({ children }: Props) => {
  const [location, setLocation] = useState<number>(0);

  const onPrev = () => {
    if (location === 0) return;
    setLocation((prev) => prev - 1);
  };

  const onNext = () => {
    if (location === children.length - 1) return;
    setLocation((prev) => prev + 1);
  };

  const onWheelEvent = (e: React.WheelEvent) => {
    if (e.deltaY < 0) {
      onPrev();
    }

    if (e.deltaY > 0) {
      onNext();
    }
  };
  return (
    <Div onWheel={onWheelEvent} location={location}>
      <div>{children}</div>

      <Button>
        <button onClick={onPrev}>{`<`}</button>
        <button onClick={onNext}>{`>`}</button>
      </Button>

      <PointBox>
        {children.map((data, index) => (
          <Point
            key={index}
            location={location === index && true}
            onClick={() => setLocation(index)}
          />
        ))}
      </PointBox>
    </Div>
  );
};

const Div = styled.div<{ location: number }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;

  position: relative;

  & > :first-child {
    width: inherit;
    height: inherit;
    transition: all cubic-bezier(0.22, 0.61, 0.36, 1) 0.8s;
    transform: ${(props) => `translateY(-${props.location}00%)`};
  }
`;

const Button = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
`;

const PointBox = styled.div`
  width: 30px;
  height: 150px;
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Point = styled.div<{ location: boolean }>`
  transition: all ease 0.5s;
  background-color: ${(props) => (props.location ? "black" : "white")};
  border: 1px solid gray;
  border-radius: 30px;
  width: 10px;
  height: 10px;

  cursor: pointer;
`;

export default VerticalCarousel;
