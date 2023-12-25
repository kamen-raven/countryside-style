import { StaticImageData } from 'next/image';
import { CardInfoComponentProps } from '~entities/CardInfoComponent/CardInfoComponent.props';

export interface ServiceCardProps extends CardInfoComponentProps {
  containerSize: 'small' | 'big';
  image: StaticImageData;
}
