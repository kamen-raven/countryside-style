import React from 'react';
import styles from './MapInner.module.scss';
import { MapInnerInterface } from './MapInner.interface';
import formatIframeSrc from '~helpers/formatters/formatIframeSrc';


const MapInner: React.FC<MapInnerInterface> = ({ data }) => {
  const iframeString = data.yandex_map_link;

  // Получаем значение атрибута src из совпадения
  const srcValue = formatIframeSrc(iframeString);

  return (
    <>
      <h3 className={styles.title}>
        На карте
      </h3>
      {srcValue &&
        <iframe
          className={styles.map}
          src={srcValue}
          loading="lazy">
        </iframe>
      }
    </>
  );
};

export { MapInner };
