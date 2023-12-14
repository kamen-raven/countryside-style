import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ContactsBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

  children?: ReactNode;
}
