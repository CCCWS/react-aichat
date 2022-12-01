import React from "react";
import styled from "styled-components";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";

import image1 from "../image/image1.png";

interface ChatMessageProps {
  chatHistory: { message: string; type: string }[];
  loading: boolean;
}

const ChatMessage = ({ chatHistory, loading }: ChatMessageProps) => {
  return (
    <>
      {chatHistory.length === 0 ? null : (
        <>
          <TransitionGroup>
            {chatHistory.map((data, index) => (
              <CSSTransition key={index} timeout={500} classNames="fade">
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
                  {data.type === "response" && (
                    <Image image={`url(${image1})`} />
                  )}
                </Message>
              </CSSTransition>
            ))}
          </TransitionGroup>
          <Waiting loadingProps={loading}>...</Waiting>
        </>
      )}
    </>
  );
};

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
    margin-top: 10px;
    background-color: ${(props) => props.type === "send" && " #bdbdbdad"};
    background-color: ${(props) => props.type === "response" && "#ffffffac"};
    border: 2px solid gray;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    border-radius: 10px;

    line-height: 30px;
    word-wrap: break-word;
    white-space: pre-wrap;
  }
`;

const Image = styled.div<{ image: string }>`
  min-width: 40px;
  height: 40px;
  border: 1px solid #5c5c5c6f;
  border-radius: 30px;
  margin-right: 10px;

  background-image: ${(props) => props.image};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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

export default React.memo(ChatMessage);
