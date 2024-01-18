import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { housesSEOTextInterface } from '~utils/constants/TypeSEOText/TypeSEOText';

export interface InfoTypeDescriptionBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: housesSEOTextInterface;
  children?: ReactNode;
}
