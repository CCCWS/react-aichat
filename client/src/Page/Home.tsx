import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Configuration, OpenAIApi } from "openai";
import axios from "axios";

import "./Home.css";
import InputFooter from "../Components/InputFooter";
import ChatMessage from "../Components/ChatMessage";
import Landing from "../Components/Landing";

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

  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);

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

    if (inputValue.length === 0) return;
    if (loading) return;

    setLoading(true);

    setChatHistory((prev) => [...prev, { message: inputValue, type: "send" }]);
    setInputValue("");

    openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: inputValue,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((res: any) => {
        setChatHistory((prev) => [
          ...prev,
          { message: res.data.choices[0].text, type: "response" },
        ]);
        setLoading(false);
      });
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!loading) {
      setInputValue(e.target.value);
    }
  };

  const test = async () => {
    const res = await axios.get("/api/test/test");
  };

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
          <button type="button" onClick={test}>
            test
          </button>
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
