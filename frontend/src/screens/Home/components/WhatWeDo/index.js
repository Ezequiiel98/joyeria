import React from 'react';

import Title from '../../../../components/Title';

import styles from './index.module.scss';

export default function WhatWeDo({ urlImg }) {
  return (
    <div className={styles.whatWeDo}>
      <Title title="Lo que hacemos" big />
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.containerImg}>
            <img src={urlImg} alt="" />
          </div>
          <div className={styles.containerDesc}>
            <h3 className={styles.title}>Anillos</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minimaquibusdam numquam natus
              voluptates consectetur, nisi optio impedit atque eius nam incidunt molestiae doloremque harum.
              Deleniti nemo non eaque veritatis aperiam?
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.containerImg}>
            <img src={urlImg} alt="" />
          </div>
          <div className={styles.containerDesc}>
            <h3 className={styles.title}>Anillos</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minimaquibusdam numquam natus
              voluptates consectetur, nisi optio impedit atque eius nam incidunt molestiae doloremque harum.
              Deleniti nemo non eaque veritatis aperiam?
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.containerImg}>
            <img src={urlImg} alt="" />
          </div>
          <div className={styles.containerDesc}>
            <h3 className={styles.title}>Anillos</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minimaquibusdam numquam natus
              voluptates consectetur, nisi optio impedit atque eius nam incidunt molestiae doloremque harum.
              Deleniti nemo non eaque veritatis aperiam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
