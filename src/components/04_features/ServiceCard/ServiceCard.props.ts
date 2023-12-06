import { CardInfoComponentProps } from '~/components/05_entities/CardInfoComponent/CardInfoComponent.props';

export interface ServiceCardProps extends CardInfoComponentProps {
  containerSize: 'small' | 'big';
  image: string;
}
