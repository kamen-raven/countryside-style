import React from 'react';
import styles from './ContactUsFormPopup.module.scss';
import { ContactUsFormPopupInterface } from './ContactUsFormPopup.interface.ts';
import { RequestFormComponent } from '~features/Forms/index.ts';


const ContactUsFormPopup: React.FC<ContactUsFormPopupInterface> = () => {
  return (
    <div className={styles.innerContainer}>
      <RequestFormComponent />
    </div>
  );
};

export { ContactUsFormPopup };
