import React from 'react';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.scss';


const Footer = ({ footerGridArea }: FooterProps): JSX.Element => {
  return (
    <footer className = {`${footerGridArea} ${styles.footer}`}>
      Footer
    </footer>
  );
};

export { Footer };
