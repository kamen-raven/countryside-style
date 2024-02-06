import React from 'react';
import styles from './FactsIconsListElement.module.scss';
import { FactsIconsListElementInterface } from './FactsIconsListElement.interface.ts';
import useReactMarkdown from '~hooks/useReactMarkdown.tsx';


const FactsIconsListElement: React.FC<FactsIconsListElementInterface> = ({ aboutUsPageFacts }) => {
  const markdownStyles = {
    p: styles.text,
    strong: styles.text_spanAccent,
  };

  const pTagMarkdown = (item: string) => useReactMarkdown(item, markdownStyles);

  return (
    <div className={styles.iconsContainer}>
      {aboutUsPageFacts.map((item) => {
        return (
          <div key={item._id} className={styles.advantageIconComponent}>
            <div className={styles.iconContainer}>
              {item.icon && <item.icon />}
            </div>
            <div className={styles.textContainer}>
              {pTagMarkdown(item.title)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { FactsIconsListElement };
