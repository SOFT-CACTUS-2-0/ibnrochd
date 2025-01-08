import React, { useState, useEffect, useRef } from 'react'
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
          src: '/gallery/videos/1.mp4',
          title: t('gallery.videos.titles', { returnObjects: true })[0]
        },
        {
          src: '/gallery/videos/2.mp4',
          title: t('gallery.videos.titles', { returnObjects: true })[1],
        },
        {
          src: '/gallery/videos/3.mp4',
          title: t('gallery.videos.titles', { returnObjects: true })[2],
        },
        {
          src: '/gallery/videos/4.mp4',
          title: t('gallery.videos.titles', { returnObjects: true })[3],
        },
        {
          src: '/gallery/videos/5.mp4',
          title: t('gallery.videos.titles', { returnObjects: true })[4],
        },
        {
          src: '/gallery/videos/6.mp4',
          title: t('gallery.videos.titles', { returnObjects: true })[5],
        },
        {
          src: '/gallery/videos/7.mp4',
          title: t('gallery.videos.titles', { returnObjects: true })[6]
        },
        {
          src: '/gallery/videos/8.mp4',
          title: t('gallery.videos.titles', { returnObjects: true })[7]
        },
        {
          src: '/gallery/videos/9.mp4',
          title: t('gallery.videos.titles', { returnObjects: true })[8]
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

    // Create refs for each video
    const videoRefs = useRef([]);

    // Ref to track programmatic pauses
    const isProgrammaticallyPausing = useRef(false);

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

    // New state to track the currently playing video index
    const [playingVideoIndex, setPlayingVideoIndex] = useState(null);
    const playingVideoRef = useRef(null);

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

        console.log(playingVideoIndex);
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
                            className={`video__item ${playingVideoIndex === index ? 'playing' : ''}`}
                            onClick={() => handleVideoClick(index)}
                            style={{height:'470px',marginBlock:'1rem'}}
                        >
                            <video
                                ref={(el) => (videoRefs.current[index] = el)}
                                loading="lazy"
                                src={video.src}
                                alt={`${t('gallery.videos.alt')} ${index + 1}`}
                                controls={false} // Hide default controls
                                onPause={() => handleVideoPause(index)}
                                onEnded={() => setPlayingVideoIndex(null)}
                            />
                            <div className="video__title">{video.title}</div>
                            {playingVideoIndex !== index && (
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