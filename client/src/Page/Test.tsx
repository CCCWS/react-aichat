import React, { useState, KeyboardEvent } from "react";
import styled from "styled-components";

interface Items {
  id: number;
  value: string;
}

const Test = () => {
  const [location, setLocation] = useState<number>(1);
  const items: Items[] = [
    { id: 1, value: "1" },
    { id: 2, value: "2" },
    { id: 3, value: "3" },
    { id: 4, value: "4" },
    { id: 5, value: "5" },
    { id: 6, value: "6" },
    { id: 7, value: "7" },
    { id: 8, value: "8" },
  ];

  const onUp = (e: KeyboardEvent<HTMLImageElement>) => {
    console.log(e.key);

    if (e.key === "ArrowUp") {
      if (location === 1) {
        setLocation(items.length - 1);
        return;
      }

      if (location === 2) {
        setLocation(items.length);
        return;
      }

      setLocation(location - 2);
    }

    if (e.key === "ArrowDown") {
      if (location === items.length - 1) {
        setLocation(1);
        return;
      }

      if (location === items.length) {
        setLocation(2);
        return;
      }
      setLocation(location + 2);
    }

    if (e.key === "ArrowLeft") {
      if (location === 1) {
        setLocation(items.length);
        return;
      }
      setLocation(location - 1);
    }

    if (e.key === "ArrowRight") {
      if (location === items.length) {
        setLocation(1);
        return;
      }
      setLocation(location + 1);
    }
  };

  return (
    <Div onKeyDown={onUp} tabIndex={0}>
      {items.map((item) => (
        <Item key={item.id} location={location} divId={item.id}>
          {item.value}
        </Item>
      ))}
    </Div>
  );
};

const Div = styled.div`
  width: 500px;
  height: 300px;
  background-color: red;

  display: flex;
  flex-wrap: wrap;
`;

interface ItemProps {
  location: number;
  divId: number;
}

const Item = styled.div<ItemProps>`
  width: 50%;
  height: 100px;
  background-color: ${(props) =>
    props.location === props.divId ? "white" : "black"};
  border: 1px solid black;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Test;
