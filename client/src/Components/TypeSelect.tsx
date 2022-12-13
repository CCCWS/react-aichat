import React, { useState } from "react";
import styled from "styled-components";

interface TypeSelectProps {
  setLangType: React.Dispatch<"ko" | "en">;
}

const TypeSelect = ({ setLangType }: TypeSelectProps) => {
  const [open, setOpen] = useState<boolean>(true);

  const onKo = () => {
    setOpen(false);
    setLangType("ko");
  };
  const onEn = () => {
    setOpen(false);
    setLangType("en");
  };
  return (
    <>
      {open && (
        <Div>
          <Box>
            <div>사용할 언어를 선택해주세요.</div>
            <Button onClick={onKo}>한국어</Button>
            <Button onClick={onEn}>영어</Button>
          </Box>
        </Div>
      )}
    </>
  );
};

const Div = styled.div`
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;

  & > :first-child {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 0.5rem;
  background-color: #dddddd;
  transition: all ease 0.3s;

  &:hover {
    cursor: pointer;
    background-color: #b8b8b8;
  }
`;

export default TypeSelect;
