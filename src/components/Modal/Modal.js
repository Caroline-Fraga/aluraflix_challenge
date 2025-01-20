import React, { useState, useEffect } from 'react';
import styles from './Modal.module.css';
import { FaTimes } from 'react-icons/fa'; 

function Modal({ video, onClose }) {
  const [editedVideo, setEditedVideo] = useState(video || {});

  useEffect(() => {
    setEditedVideo(video); 
  }, [video]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedVideo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onClose(editedVideo); 
  };

  const handleClear = () => {
    setEditedVideo({}); 
  };

  const handleClose = () => {
    onClose(); 
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.closeIcon} onClick={handleClose}>
          <FaTimes /> {}
        </div>
        <h2>Editar Vídeo</h2>
        <label>
          Título:
          <input
            type="text"
            name="title"
            value={editedVideo.title || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Categoria:
          <select
            name="category"
            value={editedVideo.category || ''}
            onChange={handleChange}
          >
            <option value="Selecione uma categoria">Selecione uma categoria</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Mobile">Mobile</option>
          </select>
        </label>
        <label>
          Link do vídeo:
          <input
            type="text"
            name="videoLink"
            value={editedVideo.videoLink || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Link da imagem:
          <input
            type="text"
            name="imageLink"
            value={editedVideo.imageLink || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Descrição:
          <textarea
            name="description"
            value={editedVideo.description || ''}
            onChange={handleChange}
          />
        </label>
        <div className={styles.modalActions}>
          <button onClick={handleSave}>Salvar</button>
          <button onClick={handleClear}>Limpar</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
