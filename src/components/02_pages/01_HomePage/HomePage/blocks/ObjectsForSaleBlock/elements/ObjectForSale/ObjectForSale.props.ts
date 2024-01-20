import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import { CardInfoComponentProps } from '../../../../../../../03_commonBlocks/ServicesList/ServiceCard/elements/CardInfoComponent/CardInfoComponent.props';
/* import { StaticImageData } from "next/image"; */

export interface ObjectForSaleProps extends CardInfoComponentProps {
  photoGeneral?: StaticImageData;
  photoSecondary?: StaticImageData;
  children?: ReactNode;
}
