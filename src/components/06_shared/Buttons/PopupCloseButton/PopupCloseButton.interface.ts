import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PopupCloseButtonInterface extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  closePopupHandler: () => void;
}
