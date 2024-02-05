import React from 'react';
import styles from './ForCottageVillagesPage.module.scss';
import { ForCottageVillagesPageInterface } from './ForCottageVillagesPage.interface.ts';
import { TitleBlockTemplate, RequestActionBlock } from '~common/index.ts';


const ForCottageVillagesPage: React.FC<ForCottageVillagesPageInterface> = ({
  typePage,
  titleBlockData,
}) => {
    return (
        <main className = {styles.mainContainer}>
          <TitleBlockTemplate  pageData={titleBlockData[typePage]} />
          <RequestActionBlock typePage={typePage} gridArea={'first'} nameForm={''}/>

          {/* Offers */}
          {/* Projects */}
          {/* TeamMemberBlock */}
          <RequestActionBlock typePage={typePage} gridArea={'second'} nameForm={''}/>
        </main>
    );
};

export { ForCottageVillagesPage };
