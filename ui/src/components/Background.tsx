import {Image} from "@chakra-ui/react";
import {useEffect, useState} from "react";

const Background = () => {
  const {width, height} = useWindowDimensions();
  const img = `https://picsum.photos/seed/picsum/${width}/${height}`;
  return (
    <Image
      position="fixed"
      top="0"
      left="0"
      bottom="0"
      right="0"
      zIndex="1"
      src={img}
      alt="bg"
    />
  )
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  return windowDimensions;
}

const getWindowDimensions = () => {
  const {innerWidth: width, innerHeight: height} = window;
  return {width, height};
}

export default Background;
