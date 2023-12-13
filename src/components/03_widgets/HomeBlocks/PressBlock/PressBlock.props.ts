import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { StaticImageData } from "next/image";

export interface pressDataInterface {
  _id: number;
  journal: string;
  article: string;
  link:string;
  logo: StaticImageData;
}


export interface PressBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  pressItems: pressDataInterface[];
  children?: ReactNode;
}
