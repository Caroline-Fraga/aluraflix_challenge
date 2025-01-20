import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './NewVideo.module.css';
import { saveVideo } from '../../services/api'; 

function NewVideo() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Frontend');
  const [videoLink, setVideoLink] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState(''); 

  const handleSave = async () => {
    const newVideo = {
      title,
      category,
      videoLink,
      imageLink,
      description,
    };

    try {
      await saveVideo(newVideo); 
      setMessage('Vídeo salvo com sucesso!');
      handleClear();
    } catch (error) {
      setMessage('Erro ao salvar o vídeo!');
    }
  };

  const handleClear = () => {
    setTitle('');
    setCategory('');
    setVideoLink('');
    setImageLink('');
    setDescription('');
  };

  return (
    <div className={styles.pageContainer}>
      <Header />
      <h2>Cadastrar Novo Vídeo</h2>
      {message && <p className={styles.message}>{message}</p>} {}
      <form className={styles.form}>
        <div className={styles.formField}>
          <label htmlFor="title">Título:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Digite o título"
            required
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="category">Categoria:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="Selecione uma categoria">Selecione uma categoria</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Mobile">Mobile</option>
          </select>
        </div>
        <div className={styles.formField}>
          <label htmlFor="videoLink">Link do vídeo:</label>
          <input
            id="videoLink"
            type="url"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
            placeholder="Digite o link do vídeo"
            required
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="imageLink">Link da imagem:</label>
          <input
            id="imageLink"
            type="url"
            value={imageLink}
            onChange={(e) => setImageLink(e.target.value)}
            placeholder="Digite o link da imagem"
            required
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="description">Descrição:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Digite a descrição"
            required
          />
        </div>
        <div className={styles.buttonContainer}>
          <button type="button" className={styles.saveButton} onClick={handleSave}>
            Salvar
          </button>
          <button type="button" className={styles.clearButton} onClick={handleClear}>
            Limpar
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default NewVideo;

