import React from 'react';
import styles from './SellerElement.module.scss';
import { SellerElementInterface } from './SellerElement.interface.ts';

import Image from 'next/image';

import formatPhoneNumber from '~helpers/formatters/formatPhoneNumber.ts';
import Link from 'next/link';
import { getUserByID } from '~api/Users/getUserByID.tsx';
import { ContactLink } from '~entities/index.ts';

const SellerElement: React.FC<SellerElementInterface> = async ({ objectData }) => {
  const agentData = objectData.display_agents.length > 0 ? await getUserByID(objectData.display_agents[0].employee) : undefined;



  return (
    <>
      {agentData &&

        <div className={styles.sellerElement}>

          <div className={styles.sellerPhoto}>
            <Image
              className={styles.sellerPhoto_img}
              width={120}
              height={120}
              src={agentData.avatars[0].image}
              alt={`${agentData.first_name} ${agentData.last_name}`} />
          </div>

          <div className={styles.sellerContainer}>
            <p className={styles.name}>
              {agentData.first_name} {agentData.last_name}
            </p>
            {agentData.phone_number &&
              <Link className={styles.telNumber}
                href={`tel:${agentData.phone_number}`}>
                {formatPhoneNumber(agentData.phone_number)}
              </Link>
            }

            <div className={styles.messengersContainer}>
              {agentData.whatsapp_link &&
                <ContactLink linkInfoData={agentData} messenger={'whatsapp'} colorSchema={'transparent'} />
              }
              {agentData.telegram_link &&
                <ContactLink linkInfoData={agentData} messenger={'telegram'} colorSchema={'transparent'} />
              }
            </div>

          </div>
        </div>
      }
    </>
  );
};

export { SellerElement };
