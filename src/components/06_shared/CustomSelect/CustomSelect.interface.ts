import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CustomSelectInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  options: string[];
  label: string;
  selectedOptions: string[];
  handleSelect: (option: string[]) => void;
}
