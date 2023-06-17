import { Outlet } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import Home from "./view/Home";
import { useMediaQuery } from "react-responsive";

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Gasoek+One&display=swap');
    
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }

  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
    background-color: #040404;
    justify-content: center;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

`
function Root() {

  // const isDesktopOrLaptop = useMediaQuery(
  //     { maxWidth: 3000 },

  // )

  const isDesktopOrLaptop = useMediaQuery({
    query : "(max-width:1200px)"
  });

  return (
    isDesktopOrLaptop ? (
      <>
        <GlobalStyle />
        <Home />
      </>
    ) : (
      <div>화면 크기를 줄여주세요</div>
    )
  );
}

export default Root;