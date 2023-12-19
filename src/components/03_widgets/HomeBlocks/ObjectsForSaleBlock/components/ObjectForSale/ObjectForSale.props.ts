import { ReactNode } from 'react';
import { CardInfoComponentProps } from '~entities/CardInfoComponent/CardInfoComponent.props';
/* import { StaticImageData } from "next/image"; */

export interface ObjectForSaleProps extends CardInfoComponentProps {
  photoGeneral?: string;//StaticImageData;
  photoSecondary?: string;// StaticImageData;
  children?: ReactNode;
}
