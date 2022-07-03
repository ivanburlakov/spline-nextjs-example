import "../styles/globals.css";
import Spline from "@splinetool/react-spline";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Spline
        scene="https://prod.spline.design/
TRfTj83xgjIdHPmT/scene.spline"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
