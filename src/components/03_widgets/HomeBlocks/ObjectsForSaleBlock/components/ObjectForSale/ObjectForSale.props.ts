import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import { CardInfoComponentProps } from '~entities/CardInfoComponent/CardInfoComponent.props';
/* import { StaticImageData } from "next/image"; */

export interface ObjectForSaleProps extends CardInfoComponentProps {
  photoGeneral?: StaticImageData;
  photoSecondary?: StaticImageData;
  children?: ReactNode;
}
