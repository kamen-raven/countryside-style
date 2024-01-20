import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CardInfoComponentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  containerTemplate: 'picFirst' | 'textFirst';
  title: string;
  arrows?: boolean;
  buttonText: 'Перейти' | 'Подробнее';
  description?: string;
  block?: 'objects'| 'services';
  children?: ReactNode;
}
