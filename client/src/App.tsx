import React from "react";
import GlobalStyle from "./Components/Style/GlobalStyle";
import Home from "./Page/Home";

import { firestore } from "./firebase";

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
