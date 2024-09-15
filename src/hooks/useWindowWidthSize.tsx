'use client';

import { useState, useEffect, useCallback } from "react";

export function useWindowWidthSize() {
  const [widthSize, setWidthSize] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

  const handleResize = useCallback(() => {
    setWidthSize(window.innerWidth);
  }, []);
  useEffect(() => {


    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return widthSize;
}
