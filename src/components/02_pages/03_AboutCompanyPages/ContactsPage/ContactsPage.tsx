import React from 'react';
import styles from './ContactsPage.module.scss';
import { ContactsPageInterface } from './ContactsPage.interface.ts';
import { ContactListBlock, MapBlock, QuestionFormBlock_ContactsPage, ContactsTitleBlock } from './blocks/index.ts';

const ContactsPage: React.FC<ContactsPageInterface> = ({ generalContactsData, employeesList }) => {




  return (
    <main className={styles.mainContainer}>
      <ContactsTitleBlock generalContactsData={generalContactsData} /> 
      <MapBlock mapInfoData={generalContactsData} />
      <ContactListBlock employeesList={employeesList} />
      <QuestionFormBlock_ContactsPage />
    </main>
  );
};

export { ContactsPage };
