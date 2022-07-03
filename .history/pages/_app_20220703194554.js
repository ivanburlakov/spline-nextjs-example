import React from "react";
import "../styles/globals.css";
import Spline from "@splinetool/react-spline";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Spline scene="https://prod.spline.design/xqj0cPqjGfnChROo/scene.splinecode" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
