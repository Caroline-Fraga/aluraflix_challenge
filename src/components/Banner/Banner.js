import React, { useEffect, useState } from 'react';
import styles from './Banner.module.css';

function Banner({ image, category, description }) {
  const [currentImage, setCurrentImage] = useState(image);
  const [currentCategory, setCurrentCategory] = useState(category);
  const [currentDescription, setCurrentDescription] = useState(description);

  useEffect(() => {
    
    setCurrentImage(image);
    setCurrentCategory(category);
    setCurrentDescription(description);
  }, [image, category, description]);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Frontend':
        return styles.frontend;
      case 'Backend':
        return styles.backend;
      case 'Mobile':
        return styles.mobile;
      default:
        return '';
    }
  };

  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: currentImage ? `url(${currentImage})` : 'none',
      }}
    >
      <div className={styles.overlay}>
        {currentCategory || currentDescription ? (
          <>
            <h1 className={getCategoryColor(currentCategory)}>{currentCategory}</h1>
            <p>{currentDescription}</p>
          </>
        ) : (
          <p>O banner está limpo. Nenhum vídeo selecionado.</p>
        )}
      </div>
    </div>
  );
}

export default Banner;

