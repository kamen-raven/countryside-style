import { Open_Sans } from "next/font/google";
import Gotham_Pro from "next/font/local";

export const openSans = Open_Sans({
  subsets: ["cyrillic", "latin", ],
  variable: "--openSans",
  fallback: ["sans serif"],
});

export const gothamPro = Gotham_Pro({
  src: [
    {
      path: "./Gotham Pro/GothamPro.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Gotham Pro/GothamPro-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Gotham Pro/GothamPro-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Gotham Pro/GothamPro-Black.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--gothamPro",
  fallback: ["sans serif"],
});
