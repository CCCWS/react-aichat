import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export const Papago_client_id: string = "_lXQAvuTjq_l0PT8yBcA";
export const Papago_client_secret: string = "E_eU2E8D34";

const Test2 = () => {
  useEffect(() => {
    const test = async () => {
      const api_url = "/v1/papago/n2mt";

      const options = {
        source: "ko",
        target: "en",
        text: "안녕",
      };

      const config = {
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "x-naver-client-id": Papago_client_id,
          "x-naver-client-secret": Papago_client_secret,
        },
      };

      const res = await axios.post(`naver${api_url}`, options, config);
      console.log(res.data.message.result.translatedText);

      // axios
      //   .get(
      //     "naver/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%BD%94%EC%8A%A4%ED%94%BC"
      //   )
      //   .then((data) => {
      //     console.log(data);
      //   });

      // {
      //   if (!error && response.statusCode == 200) {
      //     res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
      //     res.end(body);
      //   } else {
      //     res.status(response.statusCode).end();
      //     console.log("error = " + response.statusCode);
      //   }
      // });
    };

    test();
  }, []);

  return (
    <div>
      <Test>페이지 1</Test>
    </div>
  );
};

const Test = styled.div`
  padding: 10px;
  width: 100%;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 50px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  font-size: 50px;
`;

const Div1 = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;

const Div2 = styled.div`
  width: 100%;
  height: 100%;
  background-color: yellow;
`;

const Div3 = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
`;

const Div4 = styled.div`
  width: 100%;
  height: 100%;
  background-color: green;
`;

const Div5 = styled.div`
  width: 100%;
  height: 100%;
  background-color: orange;
`;

export default Test2;
