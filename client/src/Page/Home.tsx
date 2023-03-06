import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { firestore } from "../firebase";

import "./Home.css";
import InputFooter from "../Components/InputFooter";
import ChatMessage from "../Components/ChatMessage";
import Landing from "../Components/Landing";
import TypeSelect from "../Components/TypeSelect";

import useTranslate from "../hooks/useTranslate";
import useAi from "../hooks/useAi";

interface chatHistory {
  message: string;
  type: string;
}

interface Api_Keys {
  AI_KEY: string;
  PAPAGO_CLIENT_ID: string;
  PAPAGO_CLIENT_SECRET: string;
}

const Home = () => {
  const [chatHistory, setChatHistory] = useState<chatHistory[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [scroll, setScroll] = useState<boolean>(false);
  const [langType, setLangType] = useState<"ko" | "en">("ko");

  const [apiKeys, setApiKeys] = useState<Api_Keys>({
    AI_KEY: "",
    PAPAGO_CLIENT_ID: "",
    PAPAGO_CLIENT_SECRET: "",
  });

  const scrollRef = useRef<any>();

  const { result: krToEn, papagoApi } = useTranslate();
  const { response, onSendMessageAi } = useAi();

  useEffect(() => {
    const bucket = firestore.collection("api_key");
    bucket
      .doc("api_key")
      .get()
      .then((data) => {
        const getKey: any = data.data();
        setApiKeys(getKey);
      });
  }, []);

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

    //한국어 사용시 번역
    if (langType === "ko") {
      papagoApi(
        "ko",
        "en",
        inputValue,
        apiKeys.PAPAGO_CLIENT_ID,
        apiKeys.PAPAGO_CLIENT_SECRET
      );
    }

    //영어 사용시 번역을 하지않고 바로 문장 전달
    if (langType === "en") {
      onSendMessageAi(inputValue, langType, apiKeys);
    }

    setChatHistory((prev) => [...prev, { message: inputValue, type: "send" }]);
    setInputValue("");
  };

  //한국어 사용시 번역을한 문장을 전달
  useEffect(() => {
    if (krToEn.length !== 0) {
      onSendMessageAi(krToEn, langType, apiKeys);
    }
  }, [krToEn, langType, onSendMessageAi, apiKeys]);

  useEffect(() => {
    if (response.length !== 0) {
      setChatHistory((prev) => [
        ...prev,
        { message: response, type: "response" },
      ]);
      setLoading(false);
    }
  }, [response]);

  return (
    <HomeDiv>
      <Landing />
      <TypeSelect setLangType={setLangType} />
      <Chat ref={scrollRef}>
        <TodayDate>
          <div>
            {new Intl.DateTimeFormat("ko", { dateStyle: "long" }).format(
              new Date()
            )}
          </div>
        </TodayDate>

        <ChatMessage chatHistory={chatHistory} loading={loading} />
      </Chat>

      <InputFooter
        onSendMessage={onSendMessage}
        inputValue={inputValue}
        onInputChange={onInputChange}
        loading={loading}
        langType={langType}
      />
    </HomeDiv>
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
