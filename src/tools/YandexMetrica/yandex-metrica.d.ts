/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    ym: (id: number, event: string, params?: any) => void;
  }
}

export {};
