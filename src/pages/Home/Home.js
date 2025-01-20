import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import Modal from '../../components/Modal/Modal';
import styles from './Home.module.css';
import { getVideos, deleteVideo, updateVideo } from '../../services/api';

function Home() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoToEdit, setVideoToEdit] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const data = await getVideos();
      setVideos(data);
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (selectedVideo && selectedVideo.id === id) {
      setSelectedVideo(null);
    }
    await deleteVideo(id);
    setVideos((prevVideos) => prevVideos.filter(video => video.id !== id));
  };

  const handleEdit = (video) => {
    setVideoToEdit(video);
    setIsModalOpen(true);
  };

  const handleModalClose = async (updatedVideo) => {
    if (updatedVideo) {
      await updateVideo(updatedVideo.id, updatedVideo);
      setVideos((prevVideos) =>
        prevVideos.map((video) => (video.id === updatedVideo.id ? updatedVideo : video))
      );
    }
    setIsModalOpen(false);
  };

  const handleSelectVideo = (video) => {
    setSelectedVideo(video);
  };

  const handleNext = () => {
    
    const visibleCards = Math.floor(window.innerWidth / 350);  
    
    const filteredVideos = videos.filter(video => video.category === 'Frontend'); 

    const totalCards = filteredVideos.length;
    
    const maxIndex = totalCards - visibleCards;
  
    if (carouselIndex < maxIndex) {
      setCarouselIndex(carouselIndex + 1);
    }
  };
  
  const handlePrev = () => {
    if (carouselIndex > 0) {
      setCarouselIndex(carouselIndex - 1);
    }
  };
  
  
  useEffect(() => {
    const handleResize = () => {
      const visibleCards = Math.floor(window.innerWidth / 320);
      const maxIndex = videos.length - visibleCards;

      if (carouselIndex > maxIndex) {
        setCarouselIndex(maxIndex);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [carouselIndex, videos]);

  return (
    <div className={styles.pageContainer}>
      <Header />
      {selectedVideo && (
        <Banner
          image={selectedVideo.imageLink}
          category={selectedVideo.category}
          description={selectedVideo.description}
        />
      )}

      {['Frontend', 'Backend', 'Mobile'].map((category) => (
        <section key={category} className={`${styles.category} ${styles[category.toLowerCase()]}`}>
          <h2>{category.toUpperCase()}</h2>
          <div className={styles.carousel}>
            <button className={styles.carouselButton} onClick={handlePrev}>‹</button>
            <div className={styles.carouselContainer}>
              <div
                className={styles.carouselItems}
                style={{ transform: `translateX(-${carouselIndex * 320}px)` }}
              >
                {videos.filter(video => video.category === category).map(video => (
                  <Card
                    key={video.id}
                    video={video}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                    onSelect={handleSelectVideo}
                  />
                ))}
              </div>
            </div>
            <button className={styles.carouselButton} onClick={handleNext}>›</button>
          </div>
        </section>
      ))}

      {isModalOpen && (
        <Modal
          video={videoToEdit}
          onClose={handleModalClose}
        />
      )}

      <Footer />
    </div>
  );
}

export default Home;
