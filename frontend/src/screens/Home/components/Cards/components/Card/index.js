import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Imagen from 'components/Imagen';

import styles from './index.module.scss';

export default function Card({ urlImg, icon, title, description }) {
  return (
    <div className={icon ? styles.cardIcon : styles.card}>
      {icon && <div className={styles.containerIcon}> <FontAwesomeIcon icon={icon} />   </div>}  
      {!icon && <Imagen src={urlImg} alt={`Imagen de ${title}`} className={styles.containerImg} />}
      <div className={styles.containerDesc}>
        <h3 className={styles.title}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.instanceOf(Object),
  urlImg: PropTypes.string
}
