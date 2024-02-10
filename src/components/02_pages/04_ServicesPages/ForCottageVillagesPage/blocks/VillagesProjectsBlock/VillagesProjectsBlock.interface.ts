import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { villagesProjectsDataInterface } from '~data/constant/servicesBlock/villagesProjectsData/villagesProjectsData.interface';

export interface VillagesProjectsBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement > {
  projectsData: villagesProjectsDataInterface[];
}
