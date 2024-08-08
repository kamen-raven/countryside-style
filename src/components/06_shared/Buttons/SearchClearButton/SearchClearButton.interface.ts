import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SearchClearButtonInterface extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  onClick: (event: React.FormEvent) => void;
  disabled: boolean;
  innerText?: string;
}
