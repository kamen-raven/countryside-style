import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface InfoTextBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {

  children?: ReactNode;
}
