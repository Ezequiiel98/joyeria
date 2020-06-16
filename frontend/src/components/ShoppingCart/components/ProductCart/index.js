import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import styles from './index.module.scss';

export default function ProductCart({ id, uuid, imgURL, title, price, category, onClick }) {
  const product = { id, uuid, imgURL, title, price, category };

  return (
    <div className={styles.product}>
      <div className={styles.containerImg}>
        <img className={styles.img} src={imgURL} alt={`Imagen de ${title}`} />
      </div>
      <span className={styles.title}>{title}</span>
      <span className={styles.price}>${price}</span>
      <button className={styles.buttonDelete} type="button" onClick={e => onClick(e, product)}>
        <FontAwesomeIcon className={styles.icon} icon={faTrashAlt} />
      </button>
    </div>
  );
}
