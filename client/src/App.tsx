import React, { useEffect } from "react";
import scrollbar from "smooth-scrollbar";

import GlobalStyle from "./Components/Style/GlobalStyle";
import Home from "./Page/Home";

function App() {
  // useEffect(() => {
  //   const body = document.querySelector("#smooth-scroll") as HTMLInputElement;
  //   scrollbar.init(body);
  // }, []);

  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
