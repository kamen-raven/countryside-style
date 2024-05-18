import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ArrowsButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  position: 'left' | 'right';
  type?: 'common' | 'inImg';
}
