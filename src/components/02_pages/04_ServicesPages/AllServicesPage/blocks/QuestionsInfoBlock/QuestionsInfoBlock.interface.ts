import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { questionsForClientsInterface } from '~data/constant/servicesBlock/questionsForClients/questionsForClients.interface';

export interface QuestionsInfoBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement > {
  questionsList: questionsForClientsInterface[];
}
