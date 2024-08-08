import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface InputErrorMessageElementInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  error: string;
}
