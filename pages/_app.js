import { createGlobalStyle, ThemeProvider } from "styled-components"
import splitbee from "@splitbee/web"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400 700;
    font-display: optional;
    src: url("/fonts/inter-var-latin.woff2") format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    justify-content:center;
  }
  html {
    font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont,
      Helvetica Neue, PingFang SC, Microsoft YaHei, Source Han Sans SC,
      Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif;
  }
  a {
    text-decoration: none;
  }
`

const theme = {
  colors: {
    primary: "#0070f3",
  },
}

export default function App({ Component, pageProps }) {
  splitbee.init({
    scriptUrl: "/bee.js",
    apiUrl: "/_hive",
  })
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
