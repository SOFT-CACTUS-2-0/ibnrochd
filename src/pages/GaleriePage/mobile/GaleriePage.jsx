import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import Navbar from '@components/Navbar/mobile/Navbar';
import Title from '@components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Sponsors from '@components/Sponsors/Sponsors';
import Contact from '@components/Contact/mobile/Contact';
import '../GaleriePage.css';
import './GaleriePage.css';

const galleryImages = Array.from({ length: 18 }, (_, i) => `/gallery/ (${i + 1}).webp`);

const MobileGaleriePage = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'MA';
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
            setVideos(prevVideos => 
                prevVideos.map(video => ({
                    ...video,
                    title: video.src === '/dac531343433d67ad1859b5e8b22ec7a.webp' 
                        ? t('gallery.videos.title') 
                        : t('gallery.videos.defaultTitle')
                }))
            );
        };
        updateVideoTitles();
    }, [i18n.language, t]);

    // Get current images
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = galleryImages.slice(indexOfFirstImage, indexOfLastImage);

    return (
        <div className='galerie__page__mobile page__mobile'>
            <Navbar />
            <div style={{padding:'2rem'}}>
                <Title
                    title={t('gallery.explore.title')}
                    subtitle={t('gallery.explore.subtitle')}
                    description={t('gallery.explore.description')}
                    style={{
                        title: {fontSize: '24px',lineHeight:'28px'},
                        subtitle: {fontSize: '24px',lineHeight:'28px'},
                        description: {fontSize: '16px',lineHeight:'20px'},
                        container: {marginBlock: '1rem'}
                    }}
                />
                <div className="video__galerie" style={{display:'block',marginBlock:'4rem', aspectRatio:'unset', height:'fit-content'}}>
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className={`video__item ${video.active ? 'active' : ''}`}
                            style={{height:'470px',marginBlock:'1rem'}}
                            onClick={() => {
                                setVideos(prevVideos => {
                                    const newVideos = prevVideos.map(v => ({...v, active: false}));
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
                    style={{
                        title: {fontSize: '24px',lineHeight:'28px'},
                        subtitle: {fontSize: '24px',lineHeight:'28px'},
                        description: {fontSize: '16px',lineHeight:'20px'},
                        container: {marginBlock: '1rem'}
                    }}
                />
                <div style={{marginBlock:'4rem',display:'block'}}>
                    <div className="image__galerie__grid" style={{paddingInline:'0', gap:'0.5rem',gridTemplateAreas:'unset'}}>
                        {currentImages.map((src, index) => (
                            <div
                                key={indexOfFirstImage + index}
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
                </div>
            </div>
            <div style={{padding:'2rem',width:'100%'}}>
                <Sponsors />
            </div>
            <Contact />
        </div>
    )
}

export default MobileGaleriePage