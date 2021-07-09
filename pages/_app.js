import { createGlobalStyle, ThemeProvider } from "styled-components"
import splitbee from "@splitbee/web"

const GlobalStyle = createGlobalStyle`
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
  splitbee.init()
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
