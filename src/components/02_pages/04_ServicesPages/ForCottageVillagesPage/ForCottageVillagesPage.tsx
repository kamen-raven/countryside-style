import React from 'react';
import styles from './ForCottageVillagesPage.module.scss';
import { ForCottageVillagesPageInterface } from './ForCottageVillagesPage.interface.ts';
import { TitleBlockTemplate, RequestActionBlock, ServicesOffers, TeamMembersBlock } from '~common/index.ts';
import { DescriptionByOffers, VillagesProjectsBlock } from './blocks/index.ts';


const ForCottageVillagesPage: React.FC<ForCottageVillagesPageInterface> = ({
  typePage,
  titleBlockData,
  offersListData,
  projectsData,
  employeesData,
}) => {

  const onePartner = employeesData.slice(0, 1);

    return (
        <main className = {styles.mainContainer}>
          <TitleBlockTemplate  pageData={titleBlockData[typePage]} />
          <RequestActionBlock typePage={typePage} gridArea={'first'} nameForm={''}/>
          <ServicesOffers offersListData={offersListData}>
            <DescriptionByOffers/>
          </ServicesOffers>
          <VillagesProjectsBlock projectsData={projectsData}/>
          <TeamMembersBlock employeesData={onePartner} teamRole={'owner'} />
          <RequestActionBlock typePage={typePage} gridArea={'second'} nameForm={''}/>
        </main>
    );
};

export { ForCottageVillagesPage };
