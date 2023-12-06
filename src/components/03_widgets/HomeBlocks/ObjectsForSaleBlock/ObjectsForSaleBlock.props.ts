import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ObjectForSaleProps } from './components/ObjectForSale/ObjectForSale.props';

export interface ObjectsForSaleBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  objItems: ObjectForSaleProps[];
}
