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



    return (
        <main className = {styles.mainContainer}>
          <TitleBlockTemplate  pageData={titleBlockData[typePage]} />
          <RequestActionBlock typePage={typePage} gridArea={'first'} nameForm={'ForCottageVillagesPageForm1'}/>
          <ServicesOffers offersListData={offersListData}>
            <DescriptionByOffers/>
          </ServicesOffers>
          <VillagesProjectsBlock projectsData={projectsData}/>
          <TeamMembersBlock employeesData={employeesData} countUsers={'single'} page={'services'} />
          <RequestActionBlock typePage={typePage} gridArea={'second'} nameForm={'ForCottageVillagesPageForm2'}/>
        </main>
    );
};

export { ForCottageVillagesPage };
