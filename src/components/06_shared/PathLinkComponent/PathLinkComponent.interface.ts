import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PathLinkComponentInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  dataInfo: string;
}
