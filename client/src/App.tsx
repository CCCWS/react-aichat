import React from "react";
import GlobalStyle from "./Components/Style/GlobalStyle";
import Home from "./Page/Home";

import { firestore } from "./firebase";

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
      {/* <Test2 /> */}
    </>
  );
}

export default App;
