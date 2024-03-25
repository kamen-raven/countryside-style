import Open_Sans from "next/font/local";
import Gotham_Pro from "next/font/local";
//import { Open_Sans } from "next/font/google";

/* export const openSans = Open_Sans({
  subsets: ["cyrillic", "latin", ],
  variable: "--openSans",
  fallback: ["sans serif"],
}); */
export const openSans = Open_Sans({
  src: [
    {
      path: "./Open Sans/OpenSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Open Sans/OpenSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Open Sans/OpenSans-Regular.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Open Sans/OpenSans-Italic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./Open Sans/OpenSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Open Sans/OpenSans-ExtraBold.woff2",
      weight: "900",
      style: "normal",
    },
  ],
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
