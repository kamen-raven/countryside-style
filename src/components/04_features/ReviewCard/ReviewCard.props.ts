import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface reviewDataInterface {
  _id: number,
  name: string,
  date: string,
  avatar: string,
  textReview: string,
  picReview: string,
}



export interface ReviewCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: reviewDataInterface;
  children?: ReactNode;
}
