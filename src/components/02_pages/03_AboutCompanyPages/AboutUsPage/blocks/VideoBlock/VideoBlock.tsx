import React from 'react';
import styles from './VideoBlock.module.scss';


const VideoBlock: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <iframe
          className={styles.video}
          src="https://www.youtube.com/embed/mRTm0lN3TJs?si=3na0a2ZsG6GXrmuj&mute=true"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy">
        </iframe>
      </div>
    </section>
  );
};

export { VideoBlock };
