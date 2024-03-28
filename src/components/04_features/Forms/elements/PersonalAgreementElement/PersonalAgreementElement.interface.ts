import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PersonalAgreementElementInterface extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children?: ReactNode;
}
