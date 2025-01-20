import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src="./assets/logo.png" alt="Logo do Aluraflix" className={styles.logo} />
    </footer>
  );
}

export default Footer;
