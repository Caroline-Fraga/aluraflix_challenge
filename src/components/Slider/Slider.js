import React from 'react';
import PropTypes from 'prop-types';
import styles from './Slider.module.css';

function Slider({ videos, onDelete, onEdit, onSelect }) {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        {videos.map((video) => (
          <div key={video.id} className={styles.card}>
            <img 
              src={video.imageLink} 
              alt={video.category} 
              onClick={() => onSelect(video)} 
            />
            <button onClick={() => onEdit(video)}>Editar</button>
            <button onClick={() => onDelete(video.id)}>Excluir</button>
          </div>
        ))}
      </div>
    </div>
  );
}

Slider.propTypes = {
  videos: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Slider;

