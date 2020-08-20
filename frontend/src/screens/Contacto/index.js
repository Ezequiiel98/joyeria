import React from 'react';

import Head from 'components/Head';

import Map from './components/Map';
import Field from './components/Field';
import Button from './components/Button';
import styles from './index.module.scss';

export default function Contacto() {
  return (
    <>
      <Head title="Contacto">
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
      </Head>
      <div className={styles.contacto}>
        <form className={styles.form} onSubmit={e => e.preventDefault()}>
          <div className={styles.direction}>
            <p>Buenos Aires </p>
            <p> 45 789-635 </p>
            <p> info@joyeria.com </p>
          </div>
          <Field type="text" label="Nombre" name="name" placeHolder="Nombre..." />
          <Field type="number" label="Telefono" name="phone" placeHolder="Telefono..." />
          <Field type="email" label="Email" name="email" placeHolder="Email..." />
          <Field type="text" textarea label="Consulta" name="name" placeHolder="Su consulta..." />
          <Button text="Enviar" />
        </form>

        <Map />
      </div>
    </>
  );
}
