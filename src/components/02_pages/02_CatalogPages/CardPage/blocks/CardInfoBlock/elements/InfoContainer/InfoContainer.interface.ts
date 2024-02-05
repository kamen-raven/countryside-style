import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { objectItemInterface } from '~data/temp/objectsTemplateList/objectItem.interface';
import { dataTemplateInterface } from '~utils/temp/objectForCard/template';

export interface InfoContainerInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement > {
  data: objectItemInterface;
  children?: ReactNode;
}
