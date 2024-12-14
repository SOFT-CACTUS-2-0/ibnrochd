import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import ContactInfo from '@components/ContactInfo/ContactInfo';
import Header from '@components/Header/Header';
import Title from '@components/Title/Title';
import Sponsors from '@components/Sponsors/Sponsors';
import Contact from '@components/Contact/Contact';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import './GaleriePage.css';

const galleryImages = Array.from({ length: 18 }, (_, i) => `/gallery/ (${i + 1}).png`);

const GaleriePage = () => {
  const { t, i18n } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);

  const [videos, setVideos] = useState([
    {
      src: '/dac531343433d67ad1859b5e8b22ec7a.webp',
      title: t('gallery.videos.title'),
      active: true,
    },
    {
      src: '/aa2af345e93eeea0eeb7efb594b2b6a6.webp',
      title: t('gallery.videos.defaultTitle'),
      active: false,
    },
    {
      src: '/9eb95320ae2883dfea85158872ab13cd.webp',
      title: t('gallery.videos.defaultTitle'),
      active: false,
    },
    {
      src: '/38b8fac457189fc27f3de71b38e89e02.webp',
      title: t('gallery.videos.defaultTitle'),
      active: false,
    },
  ]);

  useEffect(() => {
    const updateVideoTitles = () => {
      setVideos((prevVideos) => {
        return prevVideos.map((video) => ({
          ...video,
          title: t(video.src === '/dac531343433d67ad1859b5e8b22ec7a.webp' ? 'gallery.videos.title' : 'gallery.videos.defaultTitle'),
        }));
      });
    };
    updateVideoTitles();
  }, [i18n.language]);

  // Get current images
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = galleryImages.slice(indexOfFirstImage, indexOfLastImage);

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
                className={`video__item ${video.active ? 'active' : ''}`}
                onClick={() => {
                  setVideos((prevVideos) => {
                    const newVideos = prevVideos.map((video) => ({
                      ...video,
                      active: false,
                    }));
                    newVideos[index].active = !newVideos[index].active;
                    return newVideos;
                  });
                }}
              >
                <img loading="lazy" src={video.src} alt={`${t('gallery.videos.alt')} ${index + 1}`} />
                <div className="video__title">{video.title}</div>
                {video.active && (
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
                <img loading="lazy" src={src} alt={`${t('gallery.images.alt')} ${indexOfFirstImage + index + 1}`} />
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