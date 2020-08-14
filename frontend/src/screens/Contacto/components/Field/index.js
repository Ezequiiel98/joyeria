import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function Field({ label, name, placeHolder, textarea, type }) {
  return (
    <div className={styles.field}>
      <label htmlFor={label}>{label}:</label>
      {textarea ? (
        <textarea className={styles.textarea} type="text" placeholder={placeHolder} name={name} id={label} />
      ) : (
        <input className={styles.input} type={type} placeholder={placeHolder} name={name} id={label} />
      )}
    </div>
  );
}

Field.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired, 
  textarea: PropTypes.bool
}
