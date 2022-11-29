import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'SDSamliphopangche_Outline';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Outline.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}


@font-face {
    font-family: 'establishRoomNo703OTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2112@1.0/establishRoomNo703OTF.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

* {
    box-sizing: border-box;
    font-family : establishRoomNo703OTF;
    font-size: 1.05rem;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #ff444462, #ff932db7);
  border-radius: 100px;
}

body {
    display: flex;
    justify-content: center;
    background-color: white;
    margin: 0;
}

`;

export default GlobalStyle;
