import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BackgroundSVGPatternProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  positionY?: 'top' | 'bottom' | 'center';
  positionX?: 'left' | 'right';
  children?: ReactNode;
}
