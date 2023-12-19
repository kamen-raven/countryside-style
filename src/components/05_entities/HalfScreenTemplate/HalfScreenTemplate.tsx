import React from 'react';
import styles from './HalfScreenTemplate.module.scss';
import { HalfScreenTemplateInterface } from './HalfScreenTemplate.interface';


const HalfScreenTemplate: React.FC<HalfScreenTemplateInterface> = ({
  conditionColor,
  conditionTemplate,
  className,
  children
}) => {

  const styleItems = {
    color: {
      green: styles.container_bg_green,
      gray: styles.container_bg_gray,
      dark: styles.container_bg_dark,
    },
    template: {
      picFirst: styles.innerBlock_picFirst,
      textFirst: styles.innerBlock_textFirst,
    }
  };

  const setColor = styleItems.color[conditionColor];  // conditionColor == styleItems.color.green ? styleItems.color.green : styleItems.color.gray;
  const setTemplate = styleItems.template[conditionTemplate]; //conditionTemplate ? styleItems.template.picFirst : styleItems.template.textFirst;

  return (
    <>
      {conditionColor === "dark" ? '' : <div className={`${setColor}`}></div>}
      <div className={`${styles.container}  ${setColor}`}>
        <div className={`${styles.innerBlock} ${setTemplate} ${className}`}>
          {children}
        </div>
      </div>
      {conditionColor === "dark" ? '' : <div className={`${setColor}`}></div>}
    </>
  );
};

export { HalfScreenTemplate };
