import React, { useState } from "react";
import styled from "styled-components";

//overscroll-behavior: contain;
//스마트폰 사용시 아래로 스와이프하여 새로고침 방지

interface Props {
  children: React.ReactNode[];
  point?: boolean;
  delay: number;
}

const VerticalCarousel = ({ children, point, delay }: Props) => {
  //현재 위치
  const [location, setLocation] = useState<number>(0);

  //이전
  const onPrev = () => {
    if (location === 0) return;
    setLocation((prev) => prev - 1);
  };

  //다음
  const onNext = () => {
    if (location === children.length - 1) return;
    setLocation((prev) => prev + 1);
  };

  //스크롤 가능여부 확인
  const [onScroll, setOnScroll] = useState<boolean>(true);

  //마우스휠 이벤트
  const onWheelEvent = (e: React.WheelEvent) => {
    if (!onScroll) return;

    setOnScroll(false);
    if (e.deltaY < 0) {
      onPrev();
    }

    if (e.deltaY > 0) {
      onNext();
    }

    setTimeout(() => {
      setOnScroll(true);
    }, delay);
  };

  //터치 이벤트
  let startClientY: number = 0;
  const onDownEvent = (e: React.TouchEvent) => {
    startClientY = e.changedTouches[0].clientY;
  };

  const onUpEvent = (e: React.TouchEvent) => {
    let endClientY = 0;

    endClientY = e.changedTouches[0].clientY;

    let moveY = startClientY - endClientY;
    if (moveY >= 120) {
      onNext();
    }

    if (moveY <= -120) {
      onPrev();
    }
  };

  return (
    <Div
      onTouchStart={onDownEvent}
      onTouchEnd={onUpEvent}
      onWheel={onWheelEvent}
      location={location}
    >
      <div>
        {children.map((children, index) => (
          <Page key={index}>{children}</Page>
        ))}
      </div>

      {point && (
        <PointBox>
          {children.map((data, index) => (
            <Point
              key={index}
              location={location === index && true}
              onClick={() => setLocation(index)}
            />
          ))}
        </PointBox>
      )}
    </Div>
  );
};

const Div = styled.div<{ location: number }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  & > :first-child {
    width: inherit;
    height: inherit;
    transition: all cubic-bezier(0.22, 0.61, 0.36, 1) 0.8s;
    transform: ${(props) => `translateY(-${props.location}00%)`};
  }
`;

const Page = styled.div`
  width: inherit;
  height: inherit;
`;

const PointBox = styled.div`
  width: 30px;
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
  margin: 10px;

  cursor: pointer;
`;

export default VerticalCarousel;
