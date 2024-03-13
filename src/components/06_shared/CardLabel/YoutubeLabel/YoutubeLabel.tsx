import React from 'react';
import styles from './YoutubeLabel.module.scss';
import { YoutubeLabelInterface } from './YoutubeLabel.interface';
import YoutubeIcon from '~svg/catalogCard/youtubeIcon.svg';
import Link from 'next/link';

const YoutubeLabel: React.FC<YoutubeLabelInterface> = ({ link }) => {
  if (link != '') {
    return (
      <Link target='_blank' className={`${styles.label} ${styles.label_youtube}`} href={link}>
        <YoutubeIcon />
      </Link>
    );
  } else {
    return null;
  }
};

export { YoutubeLabel };
