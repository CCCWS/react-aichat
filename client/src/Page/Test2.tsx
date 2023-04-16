import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import useTranslate from "../hooks/useTranslate";

export const Papago_client_id: string = "sFy3CrTRyfjQZcUKKL1m";
export const Papago_client_secret: string = "aPongTDG2G";

const Test2 = () => {
  useEffect(() => {
    const papagoApi = async () => {
      const url = "papago/n2mt";

      const params = {
        source: "ko",
        target: "en",
        text: "테스트",
      };

      const config = {
        baseURL:
          "https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/",
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "x-naver-client-id": "jg9yEhUy3c9YvueE5AFa",
          "x-naver-client-secret": "irC78M2ete",
        },
      };

      const res = await axios.post(url, params, config);
      console.log(res);
    };

    // papagoApi();

    // const test = async () => {
    //   const option = {
    //     source: "ko",
    //     target: "en",
    //     text: "테스트",
    //     clientId: Papago_client_id,
    //     clientSecret: Papago_client_secret,
    //   };
    //   const res = await axios.post("/api/papago/translate", option);
    //   console.log(res);
    // };

    // test();
  }, []);

  useEffect(() => {
    const get = async () => {
      const res = await axios.get(
        "https://m.search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%BD%94%EC%8A%A4%ED%94%BC"
      );
      // console.log(res.data);
    };

    const a = "S1PBVAbLA1hTNOB89MTl";
    const b = "hT7skSOd8D";

    const papagoApi = async () => {
      const api_url = "papago/n2mt";

      const params = {
        source: "ko",
        target: "en",
        text: "테스트",
      };

      const config = {
        baseURL: "/papago/v1/",
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "x-naver-client-id": a,
          "x-naver-client-secret": b,
        },
      };

      const res = await axios.post(api_url, params, config);
      console.log(res);
    };

    // get();
    papagoApi();
  }, []);

  const [isView, setIsView] = useState(false);
  const testRef = useRef<any>(null);

  useEffect(() => {
    const observerCb = (entry: any) => {
      if (entry[0].isIntersecting) return setIsView(true);
      return setIsView(false);
    };

    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCb, option);

    testRef.current && observer.observe(testRef.current);

    if (isView) {
      observer.unobserve(testRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [testRef, isView]);

  const delay = [0, 0.4, 0.8, 1.2, 1.6, 2];

  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const API_KEY = "17058e11301a4bf892f409d4ea85d5ff";

    const URL = `https://rawg.io/api/games?key=${API_KEY}&search=dark soul&page_size=6`;

    const getApi = async () => {
      const res = await axios.get(URL);
      setData(res.data.results);
    };
    getApi();
  }, []);

  return (
    <>
      {/* <Div>
        {delay.map((value, index) => (
          <Test key={index} ref={testRef} delay={value} isView={isView}></Test>
        ))}
      </Div> */}
      <Box>
        {data.map((data: any) => (
          <BoxData
            key={data.id}
            img={data.background_image}
            title={data.name}
          ></BoxData>
        ))}
      </Box>
    </>
  );
};

const Box = styled.div`
  width: 700px;
  height: 500px;

  display: flex;
  flex-wrap: wrap;

  justify-content: space-evenly;
  align-content: space-evenly;
`;

const BoxData = styled.div<{ img: string; title: string }>`
  width: 200px;
  height: 200px;

  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  transition: 0.3s;

  position: relative;
  overflow: hidden;

  border-radius: 5px;

  filter: grayscale(100%);

  &::before {
    content: "${(props) => props.title}";
    color: white;
    width: 100%;
    height: 40px;

    background: linear-gradient(
      to top,
      #00000073 0%,
      #3a3a3a76 50%,
      #8383831a 100%
    );

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 5px;

    position: fixed;
    bottom: 0;

    transition: 0.5s;

    transform: translateY(50px);
    opacity: 0;
  }

  &:hover {
    filter: grayscale(0);
    cursor: pointer;

    &::before {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

const Div = styled.div`
  width: 300px;
  height: 500px;
  background-color: gray;

  display: flex;
  flex-direction: column;

  justify-content: space-around;
  align-items: center;
  z-index: 20;

  /* overflow: hidden; */

  margin: 50px;

  position: relative;
`;

const Test = styled.div<{ delay: number; isView: boolean }>`
  width: 80%;
  height: 10%;
  background-color: blue;
  border-radius: 20px;
  opacity: 0;

  transition: 0.5s;
  transition-delay: ${(props) => `${props.delay}s`};
  opacity: ${(props) => (props.isView ? "1" : "0")};
  transform: ${(props) =>
    props.isView ? " translateX(0px)" : " translateX(-50px) "};

  /* animation-name: test;
  animation-delay: ${(props) => `${props.delay}s`};
  animation-timing-function: ease;
  animation-duration: 1s;
  /* animation-iteration-count: 1; */
  animation-fill-mode: forwards;
  @keyframes test {
    from {
      /* opacity: 0; */
      transform: translateX(-50px);
    }

    to {
      /* opacity: 1; */
      transform: translateX(0px);
    }
  }
`;

export default Test2;
