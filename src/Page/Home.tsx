import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";
import { Configuration, OpenAIApi } from "https://cdn.skypack.dev/openai";

import "./Home.css";
import InputFooter from "../Components/InputFooter";

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
        model: "text-davinci-002",
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

  return (
    <HomeDiv>
      <Chat ref={scrollRef}>
        <TodayDate>
          <div>
            {new Intl.DateTimeFormat("ko", { dateStyle: "long" }).format(
              new Date()
            )}
          </div>
        </TodayDate>

        {chatHistory.length === 0 ? null : (
          <TransitionGroup className="test">
            {chatHistory.map((data, index) => (
              <CSSTransition
                key={index}
                timeout={500}
                classNames="fade"
                className="test"
              >
                <Message type={data.type}>
                  <MessageTime>
                    {new Intl.DateTimeFormat("kr", {
                      timeStyle: "short",
                    }).format(new Date())}
                  </MessageTime>

                  <MessageContent type={data.type}>
                    {data.type === "response" && <div>알파고</div>}
                    <div>{data.message}</div>
                  </MessageContent>
                  {data.type === "response" && <Image />}
                </Message>
              </CSSTransition>
            ))}
            <Waiting loadingProps={loading}>...</Waiting>
          </TransitionGroup>
        )}
      </Chat>

      <InputFooter
        onSendMessage={onSendMessage}
        inputValue={inputValue}
        onInputChange={onInputChange}
        loading={loading}
      />
    </HomeDiv>
  );
};

const HomeDiv = styled.div`
  width: 500px;
  height: 100vh;
  background-color: wheat;
  font-size: 1rem;

  @media (max-width: 500px) {
    width: 100vw;
  }
`;

const Chat = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  overflow-y: scroll;
  overflow: overlay;
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

const Message = styled.div<{ type: string }>`
  padding: 15px;
  display: flex;
  flex-direction: ${(props) => props.type === "response" && "row-reverse"};
  justify-content: flex-end;
  position: relative;
`;

const MessageTime = styled.div`
  font-size: 0.8rem;
  color: #505050;
  margin: 5px;

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const MessageContent = styled.div<{ type: string }>`
  max-width: 60%;
  & > :last-child {
    background-color: ${(props) => props.type === "send" && " #bdbdbdad"};
    background-color: ${(props) => props.type === "response" && "#ffffffac"};
    border: 2px solid gray;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 10px;

    /* white-space: pre-line; */
    word-break: break-all;
  }
`;

const Image = styled.div`
  min-width: 40px;
  height: 40px;
  background-color: red;
  border-radius: 30px;
  margin-right: 10px;
`;

const Waiting = styled.div<{ loadingProps: boolean }>`
  margin: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 10px;

  background-color: #ffffffac;
  display: inline;

  display: ${(props) => !props.loadingProps && "none"};
`;

export default Home;
