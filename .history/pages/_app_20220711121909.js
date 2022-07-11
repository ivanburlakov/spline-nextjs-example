import { useRef, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  let initialZoom = 1;
  const cube: any = useRef();

  function getScaleValue() {
    const screenWidth: number = window.innerWidth;
    // if (screenWidth > 1000) {
    //   return 0.5;
    // } else if (screenWidth > 700) {
    //   return 0.38;
    // } else if (screenWidth > 500) {
    //   return 0.32;
    // }
    return 0.5;
  }

  function onLoad(spline: any) {
    const scaleValue = getScaleValue();
    initialZoom = scaleValue;
    spline.setZoom(scaleValue);
    const obj = spline.findObjectByName("Blobs");
    cube.current = obj;
  }

  function setSplineScale(scale: number) {
    const newScale = cube.current.scale;
    newScale.x = scale;
    newScale.y = scale;
    newScale.z = scale;
    cube.current.scale = newScale;
  }

  useEffect(() => {
    function scaleSpline() {
      if (cube.current?.scale !== undefined) {
        const scaleValue = getScaleValue();
        setSplineScale(scaleValue / initialZoom);
      }
    }
    window.addEventListener("resize", scaleSpline);
    return () => window.removeEventListener("resize", scaleSpline);
  }, [initialZoom]);

  return (
    <>
      <Spline scene="https://prod.spline.design/TRfTj83xgjIdHPmT/scene.spline" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;