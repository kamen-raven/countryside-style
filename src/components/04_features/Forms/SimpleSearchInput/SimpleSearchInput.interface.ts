import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SimpleSearchInputInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
innerText: string;
place?: 'header' | 'blog';
}
