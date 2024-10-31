import React, { useEffect, useState } from "react";

export function useWindowSize() {
  const [windowSize, setWindowsize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        setWindowsize({ width: window.innerWidth, height: window.innerHeight });
      },
      []
    );
  });
  return windowSize
}
