import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface RequestFormComponentProps extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {

  children?: ReactNode;
}
