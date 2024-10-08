import { ReactNode, DetailedHTMLProps, FormHTMLAttributes } from 'react';

export interface RequestPhoneInputInterface extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  nameForm: string;
  buttonText: string;
  color?: 'common' | 'accent';
  children?: ReactNode;
}
