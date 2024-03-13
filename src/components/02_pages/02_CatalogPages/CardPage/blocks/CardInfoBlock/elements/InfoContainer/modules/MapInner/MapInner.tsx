import React from 'react';
import styles from './MapInner.module.scss';
import { MapInnerInterface } from './MapInner.interface';


const MapInner: React.FC<MapInnerInterface> = ({ data }) => {

  const iframeString = data.yandex_map_link;
  // Используем регулярное выражение для поиска значения атрибута src
  const srcValueMatch = iframeString.match(/src="([^"]*)"/);

  // Получаем значение атрибута src из совпадения
  const srcValue = srcValueMatch && srcValueMatch[1];

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
