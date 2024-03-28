import React from 'react';
import styles from './PersonalAgreementElement.module.scss';
import { PersonalAgreementElementInterface } from './PersonalAgreementElement.interface.ts';
import Link from 'next/link';


const PersonalAgreementElement: React.FC<PersonalAgreementElementInterface> = ({ className }) => {
  return (
    <p className={`${styles.agreement} ${className}`}>
      Нажимая на кнопку, вы даете свое согласие&nbsp;
      <Link className={`${styles.agreement} ${className}`}
        href={`/personal-agreement`}
        target='_blank'
        rel='noopener noreferrer'>
        на&nbsp;обработку персональных данных
      </Link>
    </p>
  );
};

export { PersonalAgreementElement };
