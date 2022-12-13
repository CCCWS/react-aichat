import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

interface InputFooterProps {
  onSendMessage: (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  loading: boolean;
  langType: "ko" | "en";
}

const InputFooter = ({
  onSendMessage,
  inputValue,
  onInputChange,
  loading,
  langType,
}: InputFooterProps) => {
  const [type, setType] = useState<string>("");

  useEffect(() => {
    if (langType === "ko") setType("한글을 입력해주세요.");
    if (langType === "en") setType("Please enter English.");
  }, [langType]);

  return (
    <Form onSubmit={onSendMessage} loadingProps={loading}>
      <input
        placeholder={type}
        value={inputValue}
        onChange={onInputChange}
      ></input>
      <button onClick={onSendMessage}>전송</button>
    </Form>
  );
};

const Form = styled.form<{ loadingProps: boolean }>`
  width: 100%;
  height: 60px;
  background-color: #ffc96592;
  border-top: 1px solid #a1a1a185;

  display: flex;
  justify-content: center;
  align-items: center;

  //input
  & > :first-child {
    outline: none;
    height: 70%;
    border-radius: 5px 0px 0px 5px;
    border: none;
    font-size: 1rem;
    padding: 1rem;
    width: 70%;

    ${(props) =>
      props.loadingProps &&
      css`
        background-color: #61616185;

        &:focus {
          color: transparent;
          text-shadow: 0 0 0 black;
          outline: none;
        }
      `}
  }

  & > :last-child {
    border: none;
    height: 70%;
    width: 15%;
    border-radius: 0px 5px 5px 0px;

    :hover {
      cursor: pointer;
      background-color: #b1b1b1d6;
    }
  }
`;

export default React.memo(InputFooter);
