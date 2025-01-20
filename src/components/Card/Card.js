import React from 'react';
import styles from './Card.module.css';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

function Card({ video, onDelete, onEdit, onSelect }) {
  const handleDelete = () => {
    onDelete(video.id);
  };

  const handleEdit = () => {
    onEdit(video);
  };

  const handleSelect = () => {
    onSelect(video);
  };

  const borderColor = video.category === 'Frontend' ? 'var(--azulClaro)' :
                      video.category === 'Backend' ? 'var(--verdeClaro)' : 
                      video.category === 'Mobile' ? 'var(--amarelo)' : '';

  return (
    <div 
      className={styles.card} 
      style={{ borderColor: borderColor }} 
      onClick={handleSelect} 
    >
      <img src={video.imageLink} alt={video.title} className={styles.cardImage} />
      <h3 className={styles.cardTitle}>{video.title}</h3> {}
      <div className={styles.cardActions}>
        <FaEdit onClick={handleEdit} className={styles.editIcon} />
        <FaTrashAlt onClick={handleDelete} className={styles.deleteIcon} />
      </div>
    </div>
  );
}

export default Card;
