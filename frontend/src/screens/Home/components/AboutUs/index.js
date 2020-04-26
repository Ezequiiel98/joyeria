import React from 'react';

import styles from './index.module.scss';

export default function AboutUs({ urlImg }) {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.containerImg}>
        <img src={urlImg} />
      </div>
      <div className={styles.containerDescription}>
        <h2 className={styles.title}>Sobre nosotros</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad ididunt ut labore et dolore magna aliqua. Ut enim ad ididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisaliquip ex ea commodo consequat ugit, sed quia consequunturmadolores eos qui ratione voluptatem
          sequi nesciunt. Jane Blue Founder
        </p>
      </div>
    </div>
  );
}
