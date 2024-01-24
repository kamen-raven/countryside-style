import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { questionsForClientsInterface } from '~data/constant/servicesBlock/allServicesPage/questionsForClients/questionsForClients.interface';

export interface QuestionItemInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  questionItem: questionsForClientsInterface;
}
