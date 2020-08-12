import React from 'react';

import styles from './index.module.scss';

export default function Newsletter() {
  return (
    <div>
      <p className={styles.subtitle}> No te pierdas todas nuestras novedades y los mejores descuentos</p>
      <form className={styles.form} action="">
        <input className={styles.inputText} placeholder="Email..." type="text" />
        <input className={styles.inputSubmit} type="submit" value="Enviar" />
      </form>
    </div>
  );
}
