import React from 'react';

import Menu from '../../components/NavBar/components/Menu';

import ItemFooter from './components/ItemFooter';
import Newsletter from './components/Newsletter';
import styles from './index.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ItemFooter title="Nesletter">
        <Newsletter />
      </ItemFooter>

      <ItemFooter title="Menu" titleCenter>
        <Menu column />
      </ItemFooter>

      <ItemFooter title="Redes" titleCenter>
        <Menu column socialNetwork />
      </ItemFooter>
    </footer>
  );
}
