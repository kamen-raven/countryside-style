import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CustomSelectInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  options: string[];
  label: string;
  selectedOption: string;
  handleSelect: (option: string) => void;
}
