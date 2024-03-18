import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    yellow: "#faec70",
    red: "#b00005",
    gray: "#CECECE",
    lightGray: "#F4F4F4",
    darkGray: "#212121",
    white: "#FFFFFF",
  },
  fontSizes: {
    s: "14px",
    m: "16px",
    l: "22px",
    xl: "30px",
  },
};

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'SansProRegular';
  src: url('../public/fonts/SourceSansProRegular.ttf') format('ttf');
  font-style: normal;
  font-weight: 400;
}
@font-face {
  font-family: 'SansProBold';
  src: url('../public/fonts/SourceSansProBold.ttf') format('ttf');
  font-style: bold;
  font-weight: 700;
}
@font-face {
  font-family: 'MerriBold';
  src: url('../public/fonts/MerriweatherBold.ttf') format('ttf');
  font-style: bold;
  font-weight: 700;
}
body {
    background: #ffffff;
  }

`;
