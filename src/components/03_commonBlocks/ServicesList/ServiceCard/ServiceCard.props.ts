import { StaticImageData } from 'next/image';
import { CardInfoComponentProps } from './elements/CardInfoComponent/CardInfoComponent.props';

export interface ServiceCardProps extends CardInfoComponentProps {
  containerSize: 'small' | 'big';
  image: StaticImageData;
}
