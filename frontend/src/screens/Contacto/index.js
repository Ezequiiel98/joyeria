import React from 'react';

import Map from './components/Map';
import Field from './components/Field';
import Button from './components/Button';
import styles from './index.module.scss';

export default function Contacto() {
  return (
    <div className={styles.contacto}>
      <form className={styles.form}>
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
  );
}
