import { ReactNode } from 'react';
import { CardInfoComponentProps } from '~/components/05_entities/CardInfoComponent/CardInfoComponent.props';

export interface ObjectForSaleProps extends CardInfoComponentProps {
  photoGeneral?: string;
  photoSecondary?: string;
  children?: ReactNode;
}
