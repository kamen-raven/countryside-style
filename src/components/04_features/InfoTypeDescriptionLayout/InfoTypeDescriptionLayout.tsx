import React from 'react';
import styles from './InfoTypeDescriptionLayout.module.scss';
import { InfoTypeDescriptionLayoutInterface } from './InfoTypeDescriptionLayout.interface.ts';

import ToggleIcon from '~svg/button/toggle.svg';
import useSplitText from '../../../hooks/useSplitText.tsx';

const InfoTypeDescriptionLayout: React.FC<InfoTypeDescriptionLayoutInterface> = ({ data }) => {



  const buttonCondition = {
    closed: {
      text: 'Читать весь текст',
      activeStyle: '',
    },
    opened: {
      text: 'Свернуть текст',
      activeStyle: styles.active,
    },
    text: {
      closed: 'Читать весь текст',
      opened: 'Свернуть текст',
    },
    activationClass: {
      closed: '',
      opened: styles.active,
    }
  };



  const textArray = useSplitText(data.houses.SEOText).splitted;


  console.log(textArray);







  return (
    <div className={styles.layoutContainer}>
      <div className={styles.inner}>
        <div className={styles.inner__visible}> {/* видимые абзацы */}

          {textArray.slice(0, 2).map((item) =>
          { /* берем только первые два абзаца из массива для видимой части */
            return (
              <div className={styles.textBlock}>
                <h2 className={styles.subtitle}>
                  {item[0]}
                </h2>
                <p className={styles.paragraph}>
                  {item[1]}
                </p>
              </div>
            );
          })}
        </div>
        <div className={styles.inner__toggle}>
          Mollit do et eu ad esse non dolor enim consequat reprehenderit enim. Qui tempor nostrud sit non mollit dolor exercitation fugiat non ut. Reprehenderit magna adipisicing laborum adipisicing consectetur et aliquip aute qui incididunt officia ad adipisicing. Dolore duis culpa excepteur exercitation do ipsum veniam sunt labore ullamco nisi.Sunt ullamco quis do minim officia mollit commodo amet fugiat in sint. Minim quis id excepteur cillum cillum in voluptate anim tempor incididunt ea in elit pariatur. Laborum anim ea laboris qui et in commodo id minim. Exercitation proident dolore minim pariatur Lorem id occaecat amet eu velit. Adipisicing et adipisicing id nisi exercitation tempor cillum ullamco pariatur culpa ullamco ipsum labore. Ipsum mollit consectetur commodo exercitation ullamco laboris adipisicing cillum.Mollit sint enim aute ut labore esse deserunt dolor. Occaecat duis esse nisi ea deserunt do mollit ea elit exercitation velit exercitation do. Eiusmod minim eu cupidatat elit non sint consectetur et minim sit pariatur ex sint. Aliquip consectetur nulla est ut nisi ut amet voluptate ad commodo sunt exercitation ut exercitation. Dolore mollit velit dolore aliqua ipsum elit irure irure labore voluptate. Sit in esse adipisicing consequat dolore eu aute excepteur incididunt ad nisi ut commodo.Deserunt reprehenderit in eiusmod nisi cupidatat magna quis tempor velit quis nulla excepteur consectetur dolore. Eu culpa duis ad ipsum ut. Dolore pariatur deserunt occaecat proident Lorem. Aliquip aute qui Lorem duis adipisicing exercitation consequat. Sint occaecat duis Lorem ea ipsum laboris voluptate.Consectetur veniam irure voluptate eu duis quis. Cupidatat occaecat Lorem occaecat officia elit in ea Lorem enim dolore mollit. In mollit sit ad amet elit sit culpa id esse nisi.Est ipsum velit excepteur laborum officia ut dolor dolor consequat aliquip elit ex. Pariatur commodo reprehenderit aliquip excepteur tempor deserunt consectetur duis Lorem incididunt consequat. Sint dolore ea commodo eiusmod velit nulla non consequat exercitation adipisicing. Nisi nisi fugiat voluptate in ad est amet.
        </div>
      </div>
      <button className={`${styles.toggleButton}`}>
        Читать весь текст
        <ToggleIcon />
      </button>
    </div>
  );
};

export { InfoTypeDescriptionLayout };
