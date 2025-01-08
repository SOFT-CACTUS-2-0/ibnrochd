import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import ContactInfo from '@components/ContactInfo/ContactInfo';
import Header from '@components/Header/Header';
import Title from '@components/Title/Title';
import Sponsors from '@components/Sponsors/Sponsors';
import Contact from '@components/Contact/Contact';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import './GaleriePage.css';

const galleryImages = Array.from({ length: 18 }, (_, i) => `/gallery/ (${i + 1}).webp`);

const GaleriePage = () => {
  const { t, i18n } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);

  const [videos, setVideos] = useState([
    {
      src: '/gallery/videos/1.mp4',
      title: t('gallery.videos.titles', { returnObjects: true })[0],
      active: true,
    },
    {
      src: '/gallery/videos/2.mp4',
      title: t('gallery.videos.titles', { returnObjects: true })[1],
      active: false,
    },
    {
      src: '/gallery/videos/3.mp4',
      title: t('gallery.videos.titles', { returnObjects: true })[2],
      active: false,
    },
    {
      src: '/gallery/videos/4.mp4',
      title: t('gallery.videos.titles', { returnObjects: true })[3],
      active: false,
    },
    {
      src: '/gallery/videos/5.mp4',
      title: t('gallery.videos.titles', { returnObjects: true })[4],
      active: false,
    },
    {
      src: '/gallery/videos/6.mp4',
      title: t('gallery.videos.titles', { returnObjects: true })[5],
      active: false,
    },
    {
      src: '/gallery/videos/7.mp4',
      title: t('gallery.videos.titles', { returnObjects: true })[6],
      active:false,
    },
    {
      src: '/gallery/videos/8.mp4',
      title: t('gallery.videos.titles', { returnObjects: true })[7],
      active:false,
    },
    {
      src: '/gallery/videos/9.mp4',
      title: t('gallery.videos.titles', { returnObjects: true })[8],
      active:false,
    },
  ]);

  // on language change, update the videos
  useEffect(() => {
    setVideos((prevVideos) => {
      return prevVideos.map((video, index) => ({
        ...video,
        title: t('gallery.videos.titles', { returnObjects: true })[index],
      }));
    });
  }, [i18n.language, t]);

  // New state to track the currently playing video index
  const [playingVideoIndex, setPlayingVideoIndex] = useState(null);
  const isProgrammaticallyPausing = useRef(false);
  const playingVideoRef = useRef(null);

  // Create refs for each video
  const videoRefs = useRef([]);

  // Pause all videos when component unmounts
  useEffect(() => {
    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.pause();
        }
      });
    };
  }, []);

  // Get current images
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = galleryImages.slice(indexOfFirstImage, indexOfLastImage);

  const handleVideoClick = (index) => {
    if (playingVideoRef.current === index) {
        // If the clicked video is already playing, pause it
        videoRefs.current[index].pause();
        playingVideoRef.current = null;
        setPlayingVideoIndex(null);
    } else {
        // Indicate that we're about to programmatically pause videos
        isProgrammaticallyPausing.current = true;

        // Pause all videos
        videoRefs.current.forEach((video, i) => {
            if (video) {
                video.pause();
                video.currentTime = 0; // Optional: Reset to start
            }
        });

        // Reset the flag after pausing
        isProgrammaticallyPausing.current = false;

        // Play the clicked video
        if (videoRefs.current[index]) {
            videoRefs.current[index].play();
            setPlayingVideoIndex(index);
            playingVideoRef.current = index;
        }
    }
  
    // Play the clicked video
    if (videoRefs.current[index]) {
      setVideos((prevVideos) => {
        const newVideos = prevVideos.map((video) => ({
          ...video,
          active: false,
        }));
        newVideos[index].active = !newVideos[index].active;
        return newVideos;
      });
    }
  };

  const handleVideoPause = (index) => {
    // Only update state if the pause wasn't programmatic
    if (!isProgrammaticallyPausing.current) {
        if (playingVideoRef.current === index) {
            setPlayingVideoIndex(null);
            playingVideoRef.current = null;
        }
    }
  };

  return (
    <>
      <div className="galerie__page">
        <ContactInfo />
        <Header>
          <Title
            title={t('gallery.explore.title')}
            subtitle={t('gallery.explore.subtitle')}
            description={t('gallery.explore.description')}
          />
          <div className="video__galerie">
            {videos.map((video, index) => (
              <div
                key={index}
                className={`video__item ${playingVideoIndex === index ? 'playing' : ''} ${video.active ? 'active' : ''}`}
                onClick={() => handleVideoClick(index)}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  loading="lazy"
                  src={video.src}
                  alt={`${t('gallery.videos.alt')} ${index + 1}`}
                  controls={false} // Hide default controls
                  onPause={handleVideoPause}
                  onEnded={() => setPlayingVideoIndex(null)}
                />
                <div className="video__title">{video.active ? video.title : t('gallery.videos.defaultTitle')}</div>
                {playingVideoIndex !== index && video.active && (
                  <div className="play-icon">
                    <FontAwesomeIcon icon={faPlay} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <Title
            title={t('gallery.pictures.title')}
            subtitle={t('gallery.pictures.subtitle')}
            description={t('gallery.pictures.description')}
          />
          <div className="image__galerie__grid">
            {currentImages.map((src, index) => (
              <div
                key={indexOfFirstImage + index}
                style={{ '--i': `item${(index % 6) + 1}` }}
                className="image__galerie__item"
              >
                <img
                  loading="lazy"
                  src={src}
                  alt={`${t('gallery.images.alt')} ${indexOfFirstImage + index + 1}`}
                />
              </div>
            ))}
          </div>
          <div className="image__galerie__pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <div
                key={page}
                className={`image__galerie__pagination__item ${
                  page === currentPage ? 'active' : ''
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {`0${page}`}
              </div>
            ))}
          </div>
        </Header>
        <Sponsors />
      </div>
      <Contact />
    </>
  );
};

export default GaleriePage;