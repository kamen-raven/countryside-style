'use client';

import { useEffect } from "react";

type Keys = "ArrowLeft" | "ArrowRight";

export default function useArrowsKeysEvents(callback: (event: Keys) => void) {
  useEffect(() => {
    const keyboardEvents = (event: KeyboardEvent) => {
      const keyName = event.key as Keys;
      callback(keyName);
    };

    document.addEventListener("keydown", keyboardEvents);

    return () => {
      document.removeEventListener("keydown", keyboardEvents);
    };
  }, [callback]);
}
