import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface RequestFormComponentInterface extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {

  children?: ReactNode;
}
