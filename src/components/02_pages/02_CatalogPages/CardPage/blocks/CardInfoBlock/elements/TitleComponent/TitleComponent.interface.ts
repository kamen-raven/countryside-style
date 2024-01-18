import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { dataTemplateInterface } from '~utils/temp/objectForCard/template';

export interface TitleComponentInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: dataTemplateInterface;
  children?: ReactNode;
}
