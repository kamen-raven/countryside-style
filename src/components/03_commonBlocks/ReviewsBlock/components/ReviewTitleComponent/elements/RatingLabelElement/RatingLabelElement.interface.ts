import { DetailedHTMLProps, AnchorHTMLAttributes } from 'react';

export interface RatingLabelElementInterface extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  service: 'cian' | 'yandex';
}
