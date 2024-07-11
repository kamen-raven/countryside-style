import React from 'react';
import Image from 'next/image';

import styles from './AgentContactsPrint.module.scss';
import { AgentContactsPrintInterface } from './AgentContactsPrint.interface';
import formatPhoneNumber from '~helpers/formatters/formatPhoneNumber';


const AgentContactsPrint: React.FC<AgentContactsPrintInterface> = ({ agentData }) => {
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

          <div className={styles.sellerInfo}>
          <p className={styles.name}>
              {agentData.first_name} {agentData.last_name}
            </p>
            {agentData.phone_number &&
              <div className={styles.telNumber}>
                {formatPhoneNumber(agentData.phone_number)}
              </div>
            }
          </div>
        </div>
      }
    </>
    );
};

export { AgentContactsPrint };
