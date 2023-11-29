import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';

const Button = ({appearance, className='', children, ...props}: ButtonProps):JSX.Element => {

  const btnStyle = {
    colored: styles.colored,
    transparent: styles.transparent
  };
  const selectedStyle = btnStyle[appearance] || ''; // Выбираем стиль на основе значения appearance


    return(
      <button
          className={`${selectedStyle} ${className}`}
          {...props}>
        {children}
      </button>
    );
};

export { Button };
