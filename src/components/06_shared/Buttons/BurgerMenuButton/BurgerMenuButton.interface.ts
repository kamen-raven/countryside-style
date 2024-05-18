import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BurgerMenuButtonInterface  extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
/*   onClick: () => void; */
  buttonStatus: boolean;
  children?: ReactNode;
}
