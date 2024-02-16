import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { housesSEOTextInterface } from '~utils/constants/TypeSEOText/TypeSEOText';

export interface InfoTypeDescriptionLayoutInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: housesSEOTextInterface,
  children?: ReactNode;
}
