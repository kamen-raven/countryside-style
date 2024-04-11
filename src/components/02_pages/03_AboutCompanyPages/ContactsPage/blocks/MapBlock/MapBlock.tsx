'use client';
import React, { useState } from 'react';
import styles from './MapBlock.module.scss';
import { MapBlockInterface } from './MapBlock.interface.ts';


const MapBlock: React.FC<MapBlockInterface> = ({ mapInfoData }) => {
  const [isActive, setIsActive] = useState(false);
/*   const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 }); */

/*   const handleMouseEnter = () => {
    setShowTooltip(false);
  };

  const handleMouseLeave = () => {
    setShowTooltip(true);
  }; */

/*   const handleMouseMove = (e) => {
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };
 */


  const toggleMap = () => {
    setIsActive(!isActive);
    //console.log('click!');
  };

  return (
    <section className={styles.wrapper}>
      <div onClick={toggleMap} className={`${styles.container} ${!isActive && styles.block}`}
/*         onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} */

      >

{/*         {showTooltip && (
          <div
            style={{
              position: 'absolute',
              top: tooltipPosition.y + 10,
              left: tooltipPosition.x + 20,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              padding: '5px',
              borderRadius: '5px',
              zIndex: 9999,
            }}
          >
            Для активации карты нажми на нее
          </div>
        )} */}
        <iframe className={styles.yandexMap}
          src={mapInfoData.mapLink}
          loading="lazy" />
      </div>
    </section>
  );
};

export { MapBlock };
