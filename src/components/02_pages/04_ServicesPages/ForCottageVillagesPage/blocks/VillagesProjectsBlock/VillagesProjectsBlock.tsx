import React from 'react';
import styles from './VillagesProjectsBlock.module.scss';
import { VillagesProjectsBlockInterface } from './VillagesProjectsBlock.interface.ts';
import { VillagesProjectCard } from './VillagesProjectCard/VillagesProjectCard.tsx';


const VillagesProjectsBlock: React.FC<VillagesProjectsBlockInterface> = ({ projectsData }) => {
  return (
    <section className={`${styles.wrapper}`}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          Реализованные проекты
        </h2>
      </div>
      {projectsData && projectsData.map((item, index) => {
        return (
          <VillagesProjectCard key={item._id} project={item} index={index} />
        );
      })}
    </section>
  );
};

export { VillagesProjectsBlock };
