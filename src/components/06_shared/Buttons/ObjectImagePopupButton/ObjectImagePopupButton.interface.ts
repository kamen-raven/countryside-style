import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { ImageInterface } from '~interfaces/objectImage.interface';

export interface ObjectImagePopupButtonInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  picData: ImageInterface[];
  children?: ReactNode;
}
