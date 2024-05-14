'use client';

import { useState, useEffect } from "react";

export function useWindowWidthSize() {
  const [widthSize, setWidthSize] = useState(0);

  useEffect(() => {
    setWidthSize(window.innerWidth);

    function handleResize() {
      setWidthSize(window.innerWidth);
    }

/*     window.addEventListener("resize", () => {
      setTimeout(() => handleResize(), 10);
    }); */

    window.addEventListener("resize",handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return widthSize;
}
