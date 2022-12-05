import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Configuration, OpenAIApi } from "openai";

import "./Home.css";
import InputFooter from "../Components/InputFooter";
import ChatMessage from "../Components/ChatMessage";
import Landing from "../Components/Landing";

import useTranslate from "../hooks/useTranslate";
import useAi from "../hooks/useAi";

interface chatHistory {
  message: string;
  type: string;
}

const Home = () => {
  const [chatHistory, setChatHistory] = useState<chatHistory[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [scroll, setScroll] = useState<boolean>(false);
  const scrollRef = useRef<any>();

  const { result: krToEn, papagoApi: krTranslate } = useTranslate();
  // const { result: enToKr, papagoApi: enTranslate } = useTranslate();

  const { response, onSendMessageAi } = useAi();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!loading) {
      setInputValue(e.target.value);
    }
  };

  //새로운 메세지 전송, 받을때 스크롤 가장 아래로
  useEffect(() => {
    setScroll(!scroll);
  }, [chatHistory]);

  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [scroll]);

  const onSendMessage = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setLoading(true);

    if (inputValue.length === 0) return;

    krTranslate("ko", "en", inputValue);
    setChatHistory((prev) => [...prev, { message: inputValue, type: "send" }]);
    setInputValue("");
  };

  useEffect(() => {
    if (krToEn.length !== 0) {
      onSendMessageAi(krToEn);
    }
  }, [krToEn, onSendMessageAi]);

  useEffect(() => {
    if (response.length !== 0) {
      setChatHistory((prev) => [
        ...prev,
        { message: response, type: "response" },
      ]);
      setLoading(false);
    }
  }, [response]);

  console.log(process.env.NODE_ENV);

  return (
    <>
      <HomeDiv>
        <Landing />
        <Chat ref={scrollRef}>
          <TodayDate>
            <div>
              {new Intl.DateTimeFormat("ko", { dateStyle: "long" }).format(
                new Date()
              )}
            </div>
          </TodayDate>

          <ChatMessage chatHistory={chatHistory} loading={loading} />
          {/* <button onClick={test}>test</button> */}
        </Chat>

        <InputFooter
          onSendMessage={onSendMessage}
          inputValue={inputValue}
          onInputChange={onInputChange}
          loading={loading}
        />
      </HomeDiv>
    </>
  );
};

const HomeDiv = styled.div`
  width: 500px;
  height: 100vh;
  background-color: #f5deb3b5;
  font-size: 1rem;
  border-left: 1px solid #a1a1a185;
  border-right: 1px solid #a1a1a185;
  position: relative;
  overflow: hidden;

  @media (max-width: 500px) {
    width: 100vw;
  }
`;

const Chat = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  overflow-y: scroll;
  overflow: overlay;
  padding-bottom: 1rem;
`;

const TodayDate = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    background-color: #a1a1a185;
    padding: 0.7rem;
    border-radius: 30px;
  }
`;

export default React.memo(Home);
