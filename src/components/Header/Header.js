import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  const navigate = useNavigate();

  const goToHome = () => navigate('/');
  const goToNewVideo = () => navigate('/new-video');

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="./assets/logo.png" alt="Logo do Aluraflix" />
      </div>
      <div className={styles.buttons}>
        <button className={styles.inicioButton} onClick={goToHome}>
          Home
        </button>
        <button className={styles.novoVideoButton} onClick={goToNewVideo}>
          Novo Vídeo
        </button>
      </div>
    </header>
  );
}

export default Header;

