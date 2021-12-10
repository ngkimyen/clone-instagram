import React, { useEffect, useState } from "react";

const useViewPort = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return {
    isTablet: width > 740 && width <= 1024,
    isMobile: width < 739,
    isTabletMobile: width <= 1024,
  };
};

export default useViewPort;
