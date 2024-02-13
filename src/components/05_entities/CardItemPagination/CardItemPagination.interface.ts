import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CardItemPaginationInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  parentRef: React.RefObject<HTMLDivElement>
/*   scrollFunction: () => void; */
  children?: ReactNode;
}
