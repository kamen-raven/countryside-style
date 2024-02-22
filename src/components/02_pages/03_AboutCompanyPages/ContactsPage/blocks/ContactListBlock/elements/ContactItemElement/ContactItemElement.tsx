import React from 'react';
import Image from 'next/image';
import styles from './ContactItemElement.module.scss';
import { ContactItemElementInterface } from './ContactItemElement.interface.ts';

import { ContactLink, PhoneNumber } from '~entities/index.ts';
import LocationIcon from '~svg/contacts/location.svg';
import useReactMarkdown from '~hooks/useReactMarkdown.tsx';

const ContactItemElement: React.FC<ContactItemElementInterface> = ({ employeeInfo }) => {

  const markdownStyles = {
    p: styles.infoContainer__jobTitle,
    strong: '',
    em: ''
  };

  return (
    <div className={styles.contactContainer}>

      <Image
        className={styles.avatar}
        src={employeeInfo.avatars[0].image}           //! сделана первая фотография сотрудника
        alt={`${employeeInfo.first_name} + ${employeeInfo.last_name}`}
        width={350}
        height={350}/>

      <div className={styles.infoContainer}>
        <div className={styles.infoContainer__inner}>
          <p className={styles.infoContainer__name}>
            {`${employeeInfo.first_name} ${employeeInfo.last_name}`}
          </p>

          {employeeInfo.job_title &&
            <> {/* <p className={styles.infoContainer__jobTitle}>employeeInfo.jobTitle</p> */}
              {useReactMarkdown(employeeInfo.job_title, markdownStyles)}
            </>
          }

          {employeeInfo.location &&
            <p className={styles.infoContainer__location}>
              <span className={styles.infoContainer__location_icon}>
                <LocationIcon />
              </span>
              {employeeInfo.location}
            </p>
          }

        </div>

        {employeeInfo.phone_number &&
          <PhoneNumber
            className={styles.phoneNumber}
            employeeItem={employeeInfo}
            colorText={'black'} />
        }

        <div className={styles.messengersContainer}>
          {employeeInfo.telegram_link &&
            <ContactLink linkInfoData={employeeInfo} messenger={'telegram'} colorSchema={'transparent'} />
          }

          {employeeInfo.whatsapp_link &&
            <ContactLink linkInfoData={employeeInfo} messenger={'whatsapp'} colorSchema={'transparent'} />
          }

        </div>
      </div>
    </div>
  );
};

export { ContactItemElement };
