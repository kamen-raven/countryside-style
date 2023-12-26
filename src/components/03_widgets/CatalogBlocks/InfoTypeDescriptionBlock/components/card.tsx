'use client';

import React, { useEffect } from 'react';

import { usePathname } from 'next/navigation';
import useSplitText from '../../../../../hooks/useSplitText';
import housesSEOText from '~utils/constants/TypeSEOText/TypeSEOText';


const Card: React.FC = () => {
  const seoText = useSplitText(housesSEOText.houses.SEOText);



  return (
    <div>

      {seoText.splitted.map((m) => {
        return (
          <>
            <h3>{m[0]}</h3>
            <div>{m[1]}</div>
          </>

        );
      })}
    </div>
  );
};

export { Card };
