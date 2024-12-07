import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import ContactInfo from '@components/ContactInfo/ContactInfo';
import Header from '@components/Header/Header';
import Title from '@components/Title/Title';
import Sponsors from '@components/Sponsors/Sponsors';
import Contact from '@components/Contact/Contact';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import './GaleriePage.css';

const images = [
  '8b09f8c296a829da5d22736046e64f84.webp',
  'dac531343433d67ad1859b5e8b22ec7a.webp',
  '10d4d7f0a517f8c0a8f9fdcd34db140b.webp',
  '6bdc55373d4fded98f68d8fe79870be0.webp',
  '18825dfe41ba83b88eb5a963cbb2e712.webp',
  '981e14ca60d564e39dcf65faf5036dee.webp',
];

const paginationItems = [1, 2, 3];

const GaleriePage = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(1);
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
                    const newVideos = prevVideos.map(video => ({
                      ...video,
                      active: false
                    }));
                    newVideos[index].active = !newVideos[index].active;
                    return newVideos;
                  });
                }}
              >
                <img loading="lazy" src={video.src} alt={`${t('gallery.videos.videoAlt')} ${index + 1}`} />
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
            {images.map((src, index) => (
              <div
                key={index}
                style={{ '--i': `item${index + 1}` }}
                className="image__galerie__item"
              >
                <img loading="lazy" src={src} alt={`${t('gallery.pictures.imageAlt')} ${index + 1}`} />
              </div>
            ))}
          </div>
            <div className="image__galerie__pagination">
            {paginationItems.map((item) => (
              <div
                key={item}
                className={`image__galerie__pagination__item ${
                  item === currentIndex ? 'active' : ''
                }`}
                onClick={() => setCurrentIndex(item)}
              >
                {`0${item}`}
              </div>
            ))}
          </div>
        <Sponsors />
        </Header>
      </div>
      <Contact />
    </>
  );
};

export default GaleriePage;