import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { villagesProjectsDataInterface } from '~data/constant/servicesBlock/villagesProjectsData/villagesProjectsData.interface';

export interface VillagesProjectCardInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  project: villagesProjectsDataInterface;
  index: number;
}
