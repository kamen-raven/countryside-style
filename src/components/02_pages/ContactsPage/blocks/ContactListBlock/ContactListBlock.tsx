import React from 'react';
import styles from './ContactListBlock.module.scss';
import { ContactListBlockInterface } from './ContactListBlock.interface.ts';
import { ContactLink, PhoneNumber } from '~entities/index.ts';
import Image from 'next/image';
import LocationIcon from '~svg/contacts/location.svg';
import useReactMarkdown from '~hooks/useReactMarkdown.tsx';

const ContactListBlock: React.FC<ContactListBlockInterface> = ({ employeesList }) => {

  const markdownStyles = {
    p: styles.infoContainer__jobTitle,
    strong: '',
    em: ''
  }



  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>

        {employeesList.map((item) => {
          return (
            item.contacts.phone && // проверяем на наличие телефона в базе и не выводим сотрудника без номера телефона

            <div className={styles.contactContainer}>

              <Image
                className={styles.infoContainer__avatar}
                src={item.photo}
                alt={item.name} />

              <div className={styles.infoContainer}>
                <div className={styles.infoContainer__inner}>
                  <p className={styles.infoContainer__name}>
                    {item.name}
                  </p>
                  <> {/* <p className={styles.infoContainer__jobTitle}>item.jobTitle</p> */}
                    {useReactMarkdown(item.jobTitle, markdownStyles)}
                  </>
                  <p className={styles.infoContainer__location}>
                    <span className={styles.infoContainer__location_icon}>
                      <LocationIcon />
                    </span>
                    {item.location}
                  </p>
                </div>

                <PhoneNumber
                  className={styles.phoneNumber}
                  employeeItem={item}
                  colorText={'black'} />

                <div className={styles.messengersContainer}>
                  {item.contacts.telegram &&
                    <ContactLink linkInfoData={item} messenger={'telegram'} colorSchema={'color'} />
                  }

                  {item.contacts.whatsapp &&
                    <ContactLink linkInfoData={item} messenger={'whatsapp'} colorSchema={'transparent'} />
                  }

                </div>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export { ContactListBlock };
