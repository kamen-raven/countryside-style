import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface InfoTypeDescriptionLayoutInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: {
    houses: {
        title: string;
        SEOText: string;
    };
};
  children?: ReactNode;
}
