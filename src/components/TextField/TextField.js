import React from 'react';
import styles from './TextField.module.css';

function TextField({ category, title, description }) {
  return (
    <div className={styles.textField}>
      <div className={styles.field}>
        <label>Categoria</label>
        <input type="text" value={category} readOnly />
      </div>
      <div className={styles.field}>
        <label>Título</label>
        <input type="text" value={title} readOnly />
      </div>
      <div className={styles.field}>
        <label>Descrição</label>
        <textarea value={description} readOnly />
      </div>
    </div>
  );
}

export default TextField;
