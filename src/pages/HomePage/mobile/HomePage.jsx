import React, { useEffect, useRef, useState } from 'react'
import '../HomePage.css';
import './HomePage.css'
import Navbar from '@components/Navbar/mobile/Navbar'
import Title from '@components/Title/Title'
import CardBoard from '@components/CardBoard/mobile/CardBoard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Sponsors from '@components/Sponsors/Sponsors';
import Contact from '@components/Contact/mobile/Contact';
import { faArrowLeft, faArrowRight, faCalendarAlt, faChevronLeft, faChevronRight, faEnvelopeOpen, faPhone, faPlay } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';
import api from '../../../services/api';
import { Link } from 'react-router-dom';
import Modal from '../../../components/Modal/Modal';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

const MobileHomePage = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'MA';
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    appointment_date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Convert the date to include the time
      const appointmentDateTime = new Date(formData.appointment_date);
      appointmentDateTime.setHours(9, 0, 0); // Set default time to 9:00 AM

      const submitData = {
        ...formData,
        appointment_date: appointmentDateTime.toISOString(),
        status: 'pending'
      };

      const response = await api.post('/appointments', submitData);

      if (response.status === 200) {
        setIsModalOpen(true);
        setFormData({ email: '',
          phone: '',
          appointment_date: '' 
        });
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className='home__page__mobile page__mobile'>
        <Navbar />
        <div className="home__mobile__hero">
            <div className="hero__mobile__content" style={{direction: isRTL ? 'rtl' : 'ltr'}}>
                <h1 className="hero__mobile__title" style={{textAlign:'center'}}>
                  {t('home.hero.title')}, {t('home.hero.subtitle')}
                </h1>
                <p className="hero__mobile__description" data-direction={isRTL ? 'rtl' : 'ltr'}>
                    {t('home.hero.description')}
                </p>
                <div className="hero__mobile__cta">
                    <Link to="/apropos" style={{all: 'unset',cursor:'pointer'}}>
                      <button className="hero__cta__mobile__button" style={{cursor:'pointer'}}>
                          {t('home.hero.button')}
                      </button>
                    </Link>
                    <Link to="/apropos" style={{all: 'unset',cursor:'pointer'}}>
                      <div className="hero__arrow__mobile" style={{cursor:'pointer'}}>
                          <FontAwesomeIcon style={{ fontSize: '1.2rem' }} icon={isRTL ? faArrowLeft : faArrowRight} />
                      </div>
                    </Link>
                </div>
            </div>
            <div className="hero__mobile__image">
                <img src="/21699d032d59eb23405a4c8f3e2df35b.webp" alt="Hero" />
            </div>
        </div>
        <div className="booking__form__mobile" style={{direction: isRTL ? 'rtl' : 'ltr'}}>
            <form>
                <div className="form-container">
                    <div className="form-field">
                    <label htmlFor="email">
                        <FontAwesomeIcon icon={faEnvelopeOpen} /> {t('home.bookingForm.email')}
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('home.bookingForm.emailPlaceholder')}
                        required
                        style={{direction: isRTL ? 'rtl' : 'ltr'}}
                    />
                    </div>
                    <div className="form-field">
                    <label htmlFor="phone">
                        <FontAwesomeIcon icon={faPhone} /> {t('home.bookingForm.phone')}
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t('home.bookingForm.phonePlaceholder')}
                        required
                        style={{direction: isRTL ? 'rtl' : 'ltr'}}
                    />
                    </div>
                    <div className="form-field">
                    <label htmlFor="date">
                        <FontAwesomeIcon icon={faCalendarAlt} /> {t('home.bookingForm.date')}
                    </label>
                    <input type="date" id="date" name="appointment_date" value={formData.appointment_date} onChange={handleChange} required style={{direction: isRTL ? 'rtl' : 'ltr'}} />
                    </div>
                    <div className="form-submit">
                    <button type="submit" onClick={handleSubmit}>{t('home.bookingForm.submit')}</button>
                    </div>
                </div>
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                  <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
                  <h2 className="success-message">{t('contact.appointmentSuccessMessage')}</h2>
                </Modal>
            </form>
            <h1 className='quote__title'>
              “<span>{t('home.quote')}</span>“
            </h1>
        </div>
        <div className="video__mobile__section">
            <Title
                title={t('home.explore.title')}
                subtitle={t('home.explore.subtitle')}
                description={t('home.explore.description')}
                style={{
                    title: {fontSize: '24px',lineHeight:'28px'},
                    subtitle: {fontSize: '24px',lineHeight:'28px'},
                    description: {fontSize: '16px',lineHeight:'20px'},
                    container: {marginBlock: '1rem'}
                }}
            />
            <HomeVideo />
            <Title
                title={t('home.difference.title')}
                subtitle={t('home.difference.subtitle')}
                description={t('home.difference.description')}
                style={{
                    title: {fontSize: '24px',lineHeight:'28px'},
                    subtitle: {fontSize: '24px',lineHeight:'28px'},
                    description: {fontSize: '16px',lineHeight:'20px'},
                    container: {marginBlock: '1rem'}
                }}
            />
            <Features />
            <CardBoard />
            <Title
                title={t('home.personalCare.title')}
                subtitle={t('home.personalCare.subtitle')}
                description={t('home.personalCare.description')}
                style={{
                    title: {fontSize: '24px',lineHeight:'28px'},
                    subtitle: {fontSize: '24px',lineHeight:'28px'},
                    description: {fontSize: '16px',lineHeight:'20px'},
                    container: {marginBlock: '1rem'}
                }}
            />
            <Specialties />
            <Title
              title={t('home.clinicWings.title')}
              subtitle={t('home.clinicWings.subtitle')}
              description={t('home.clinicWings.description')}
              style={{
                title: {fontSize: '24px',lineHeight:'28px'},
                subtitle: {fontSize: '24px',lineHeight:'28px'},
                description: {fontSize: '16px',lineHeight:'20px'},
                container: {marginBlock: '1rem'}
              }}
            />
            <ClinicWing
              number={t('home.clinicWings.wings.0.number')}
              title={t('home.clinicWings.wings.0.title')}
              description={t('home.clinicWings.wings.0.description')}
              images={[
                '/b8dabe7f11276a7a5a058c97166b0c15.webp',
                '/f800cfb2aa8238b84077530434eb11c5.webp',
                '/300726901718ac044bf52aa78933c642.webp',
              ]}
            />
            <Title
              title={t('home.doctors.title')}
              subtitle={t('home.doctors.subtitle')}
              description={t('home.doctors.description')}
              style={{
                title: {fontSize: '24px',lineHeight:'28px'},
                subtitle: {fontSize: '24px',lineHeight:'28px'},
                description: {fontSize: '16px',lineHeight:'20px'},
                container: {marginBlock: '1rem'}
              }}
            />
            <Team />
            <Sponsors />
        </div>
        <Contact />
    </div>
  )
}

// Specialties Component
const Specialties = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'MA';
  const specialties = t('home.specialties.items', { returnObjects: true });
  const [activeIndex, setActiveIndex] = useState(0);

  // Handlers to navigate between specialties
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % specialties.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? specialties.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="home__specialites" style={{width:'100%',height:'fit-content',gap:'1rem',padding:'0', direction: isRTL ? 'rtl' : 'ltr'}}>
        <div className="specialties__title">
          {isRTL ? (
            <>
              <FontAwesomeIcon icon={faChevronLeft} className="arrow" />
              <FontAwesomeIcon icon={faChevronLeft} className="arrow" />
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faChevronRight} className="arrow" />
              <FontAwesomeIcon icon={faChevronRight} className="arrow" />
            </>
          )}
          <h2 data-direction={isRTL ? 'rtl' : 'ltr'}>{t('home.specialties.title')}</h2>
        </div>
        <hr className="specialties__divider" />
        <p className="specialties__description">
          {t('home.specialties.description')}
        </p>
      </div>
      <SpecialtyButtons
        specialties={specialties}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <NavigationControls onNext={handleNext} onPrev={handlePrev} activeIndex={activeIndex} totalButtons={specialties.length} />
    </>
  )
}

// HomeVideo Component
const HomeVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="home__video__mobile__container" data-video-status={isPlaying}>
      {!isPlaying ? (
        <>
          <img loading="lazy" src="/background.webp" alt="Home" />
          <div className="play-icon" onClick={() => setIsPlaying(true)}>
            <FontAwesomeIcon icon={faPlay} />
          </div>
        </>
      ) : (
        <iframe 
          loading="lazy"
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/ZgUA8t4lr5Q?si=iswGaE4zljLUcnQQ&autoplay=1" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        />
      )}
    </div>
  );
};

// NavigationControls Component
const NavigationControls = ({ onNext, onPrev, activeIndex, totalButtons }) => (
  <div className="back__next__container" style={{width:'100%',display:'flex',paddingInline:'0', marginBottom:'2rem'}}>
    <div className="current__item__container">
      <div className="current__item__indicator"></div>
    </div>
    <div className="back__next__item">
      <div className="back__next__item__arrow" onClick={onPrev}>
        <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '1rem' }} />
      </div>
      <div className="back__next__item__arrow active" onClick={onNext}>
        <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '1rem' }} />
      </div>
    </div>
  </div>
);

// SpecialtyButtons Component
const SpecialtyButtons = ({ specialties, activeIndex, setActiveIndex }) => {
  return (
    <div className="button__group" style={{width:'100%',display:'block',paddingInline:'0'}}>
      {specialties.map((specialty, index) => (
        <div
          key={index}
          className={`button__item ${index === activeIndex ? 'active' : ''}`}
          style={{paddingInline:'1rem', cursor:'pointer'}}
          onClick={() => setActiveIndex(index)}
        >
          {index === activeIndex && (
            <div className="button__item__arrow">
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ fontSize: '1.5rem' }}
              />
            </div>
          )}
          {specialty}
        </div>
      ))}
    </div>
  );
};

// ClinicWing Component
const ClinicWing = ({ number, title, description, images }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'MA';
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageContainerRef = useRef(null);
  const imageWidth = Math.min(window.innerWidth * 0.85, 400);
  const gap = 32;
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const swipeThreshold = 50;
  const [activeVideo, setActiveVideo] = useState(null);


  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  const clinicWingData = [
    {
      number: t(`home.clinicWings.wings.${currentContentIndex}.number`),
      title: t(`home.clinicWings.wings.${currentContentIndex}.title`),
      description: t(`home.clinicWings.wings.${currentContentIndex}.description`, { returnObjects: true }),
      videos: [
        '/wings/videos/1_etage.mp4',
        '/wings/videos/suite_dar_dmana.mp4',
        '/wings/videos/2_etage.mp4',
        '/wings/videos/suite_la_tulipe.mp4',
        '/wings/videos/3_etage.mp4',
        '/wings/videos/4_etage.mp4',
        '/wings/videos/bloc_operatoire.mp4',
        '/wings/videos/suite_majorelle.mp4'
      ]
    },
    // You can add more clinic wing data here if needed
  ];

  // Clone first and last images
  const extendedImages = [clinicWingData[0].videos[clinicWingData[0].videos.length - 1], ...clinicWingData[0].videos, ...clinicWingData[0].videos];

  const handleThumbnailClick = (index) => {
    setActiveVideo(index);
    setTimeout(() => {
      if (videoRefs.current[index]) {
        videoRefs.current[index].play();
        setIsPlaying(true);
      }
    }, 50);
  };
  
  const handleNext = () => {
    // Stop current video if playing
    const currentVideo = videoRefs.current[currentIndex + 1];
    if (currentVideo) {
      currentVideo.pause();
      setIsPlaying(false);
    }

    setCurrentIndex((prevIndex) => 
      prevIndex < clinicWingData[0].videos.length ? prevIndex + 1 : prevIndex
    );
    setCurrentContentIndex((prevIndex) =>
      prevIndex < 7 ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    // Stop current video if playing
    const currentVideo = videoRefs.current[currentIndex + 1];
    if (currentVideo) {
      currentVideo.pause();
      setIsPlaying(false);
    }

    setCurrentIndex((prevIndex) => 
      prevIndex > -1 ? prevIndex - 1 : -1
    );
    setCurrentContentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : 7
    );
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > swipeThreshold;
    const isRightSwipe = distance < -swipeThreshold;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const currentWing = clinicWingData[0];

    useEffect(() => {
        console.log('Current Index:', currentIndex);
        const imageContainer = imageContainerRef.current;

        if (!imageContainer) return;

        const handleTransitionEnd = () => {
          if (currentIndex === -1) {
            console.log('Transitioning to last slide');
            imageContainer.style.transition = 'none';
            const lastSlidePosition = (imageWidth + gap) * (images.length);
            imageContainer.style.transform = `translateX(-${lastSlidePosition}px)`;
            setCurrentIndex(images.length - 1);
            // Force a reflow to ensure the transition is removed
            imageContainer.offsetHeight;
          } else if (currentIndex === clinicWingData[0].videos.length) {
            console.log('Transitioning to first slide');
            imageContainer.style.transition = 'none';
            imageContainer.style.transform = `translateX(-${(imageWidth + gap)}px)`;
            setCurrentIndex(0);
            // Force a reflow to ensure the transition is removed
            imageContainer.offsetHeight;
          }
        };

        // Set initial transform with transition
        imageContainer.style.transition = 'transform 0.5s ease-in-out';
        const translateX = (currentIndex + 1) * (imageWidth + gap);
        imageContainer.style.transform = `translateX(-${translateX}px)`;

        imageContainer.addEventListener('transitionend', handleTransitionEnd);
        return () => {
          imageContainer.removeEventListener('transitionend', handleTransitionEnd);
        };
    }, [currentIndex, images.length, imageWidth, gap]);

  const videoRefs = useRef({});
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <>
      <div className="header-section" data-direction={isRTL ? 'rtl' : 'ltr'} style={{ width: '100%' }}>
        <div className="header-section__content" style={{direction: isRTL ? 'rtl' : 'ltr'}}>
          <h1 className="header-section__title">{currentWing.title}</h1>
          <hr style={{ width: '78vw' }} />
          <ul className="header-section__description">
            {currentWing.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="image-carousel__container-mobile" style={{alignSelf:'flex-start',width:'100%'}}>
                <div 
                  className="image-carousel-mobile" 
                  ref={imageContainerRef}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  style={{
                    display: 'flex',
                    transition: 'transform 0.5s ease-in-out',
                    width: '100%',
                    gap: '2rem',
                  }}
                >
                    {extendedImages.map((src, index) => (
                      <div key={index} className="image-carousel__card" style={{width:'min(85vw,400px)',aspectRatio:'254 / 359',height:'unset'}}>
                        {activeVideo === index ? (
                          <video
                            ref={el => videoRefs.current[index] = el}
                            loading="lazy"
                            src={`${src}#t=1`}
                            alt={`Video ${index}`}
                            style={{ width: '100%' }}
                            onClick={() => {
                              if (index - 1 === currentIndex) {
                                handlePlayClick(index);
                              }
                            }}
                            loop
                            playsInline
                          />
                          ) : (
                            <img
                              src={src.replace('videos', 'thumbnails').replace('.mp4', '.webp')}
                              alt={`Thumbnail ${index}`}
                              style={{ width: '100%', cursor: 'pointer' }}
                              onClick={() => handleThumbnailClick(index)}
                            />
                          )}
                          {
                            index - 1 === currentIndex && (
                              <div className="play-icon" onClick={() => activeVideo === index ? handlePlayClick(index) : handleThumbnailClick(index)} style={{opacity: isPlaying ? 0 : 1}}>
                                <FontAwesomeIcon icon={faPlay} />
                              </div>
                            )
                          }
                          {
                            index + 2 === currentIndex && (
                              <div className="play-icon" onClick={() => activeVideo === index ? handlePlayClick(index) : handleThumbnailClick(index)} style={{opacity: isPlaying ? 0 : 1}}>
                                <FontAwesomeIcon icon={faPlay} />
                              </div>
                            )
                          }
                        </div>
                    ))}
        </div>
        <ImageNavigation currentIndex={currentIndex} totalImages={clinicWingData[0].videos.length} onNext={handleNext} onPrev={handlePrev} />
      </div>
    </>
  );
};

// ImageNavigation Component
const ImageNavigation = ({ currentIndex, totalImages, onNext, onPrev }) => (
    <div className="navigation-controls" style={{ width: '100vw' }}>
        <div className="numbers">
            <span className="navigation-controls__number">
            {
              String(((currentIndex + totalImages) % totalImages) + 1).padStart(2, '0')
            }
            </span>
            /
            <span className="navigation-controls__number">
                {String(totalImages).padStart(2, '0')}
      </span>
        </div>
        <div className="arrows">
            <div className="icon__arrow left" onClick={onPrev}>
        <FontAwesomeIcon icon={faArrowLeft} className="navigation-controls__arrow" />
            </div>
          <div className="icon__arrow right" onClick={onNext}>
                <FontAwesomeIcon icon={faArrowRight} className="navigation-controls__arrow" />
            </div>
        </div>
  </div>
);

// Features Component
const Features = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'MA';
  const featureItems = [
    {
      icon: '/features/microscope.svg',
      title: t('home.features.items.0.title'),
      description: t('home.features.items.0.description')
    },
    {
      icon: '/features/security.svg',
      title: t('home.features.items.1.title'),
      description: t('home.features.items.1.description')
    },
    {
      icon: '/features/care.svg',
      title: t('home.features.items.2.title'),
      description: t('home.features.items.2.description')
    },
    {
      icon: '/features/equipe.svg',
      title: t('home.features.items.3.title'),
      description: t('home.features.items.3.description')
    }
  ];

  return (
    <div className="features__container__mobile" style={{gap: '1rem',display:'flex',flexDirection:'column',marginBlock:'2rem'}}>
      {featureItems.map((item, index) => (
        <FeatureItem key={index} {...item} />
      ))}
    </div>
  );
};
  
// FeatureItem Component
const FeatureItem = ({ icon, title, description }) => {
  const {t, i18n} = useTranslation()
  const isRTL = i18n.language === 'MA';
  return (
    <div className="features__list__item" style={{width:'100%', direction: isRTL ? 'rtl' : 'ltr'}}>
      <div className="feature__icon">
        <img loading="lazy" src={icon} alt={title} />
      </div>
      <div className="feature__title">{title}</div>
      <div className="feature__description" style={{width:'100%'}}>{description}</div>
    </div>
  );
};

// Team Component
const Team = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'MA';
  const teamMembers = t('home.doctors.team', { returnObjects: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const teamContainerRef = useRef(null);
  const memberHeight = 320;
  const gap = 25; // Gap between team member cards
  const slideWidth = memberHeight + gap;
  const totalMembers = teamMembers.length;

  // Clone first and last members for infinite looping
  const extendedMembers = [teamMembers[totalMembers - 1], ...teamMembers, ...teamMembers];

  // Calculate the translation amount
  const translateY = -((currentIndex + 1) * slideWidth);

  useEffect(() => {
    const teamContainer = teamContainerRef.current;
  
    const handleTransitionEnd = () => {
      if (currentIndex === -1) {
        // Move to the last real slide without transition
        teamContainer.style.transition = 'none';
        teamContainer.style.transform = `translateY(-${slideWidth * totalMembers}px)`;
        setCurrentIndex(totalMembers - 1);
      } else if (currentIndex === totalMembers) {
        // Move to the first real slide without transition
        teamContainer.style.transition = 'none';
        teamContainer.style.transform = `translateY(-${slideWidth}px)`;
        setCurrentIndex(0);
      }
    };
  
    // Apply the transform with transition
    teamContainer.style.transition = 'transform 0.5s ease';
    teamContainer.style.transform = `translateY(${translateY}px)`;
  
    // Add the transitionend event listener
    teamContainer.addEventListener('transitionend', handleTransitionEnd);
  
    // Cleanup event listener on unmount or when dependencies change
    return () => {
      teamContainer.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [translateY, currentIndex, totalMembers, slideWidth]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex < totalMembers ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > -1 ? prevIndex - 1 : -1
    );
  };

  return (
    <>
    <div className="team__carousel__container" style={{
      width: '100%',
      margin: 'auto',
      overflow: 'hidden'
    }}>
      <div className="team__container" ref={teamContainerRef} style={{width:'100%'}}>
      <div
          className="team__track"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              height: '1330px',
            }}
          >
        {extendedMembers.map((member, index) => (
          <TeamMember key={index} {...member} memberHeight={`${memberHeight}px`} gap={`${gap}px`} index={index}/>
        ))}
        </div>
      </div>
      </div>
      <div className="back__next__container" style={{paddingInline:'0rem',marginBlock:'2rem'}}>
          <div className="current__item__container">
            <div className="current__item__indicator"></div>
          </div>
          <div className="back__next__item">
            <div className={`back__next__item__arrow active`} onClick={handlePrev}>
              <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '1rem' }} />
            </div>
            <div className={`back__next__item__arrow`} onClick={handleNext}>
              <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '1rem' }} />
            </div>
          </div>
        </div>
    </>
  );
};

// TeamMember Component
const TeamMember = ({ name, specialty, image, isDefault, memberHeight, gap, index }) => {
  function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }

  const calculateAngles = (degrees) => {
    const radians = degreesToRadians(degrees);
    return {
      cos: Math.cos(radians),
      sin: Math.sin(radians),
    };
  };

  const angles = calculateAngles(-45);

  return (
    <div className="team__item"  style={{
      flex: '0 0 auto',
      height: memberHeight,
      marginBottom: gap,
    }}>
      <div className="team__item__image">
        <img loading="lazy" src={image} alt={name} className={`${isDefault ? 'default' : null}`} />
        <div
          style={{
            '--cos': angles.cos,
            '--sin': angles.sin,
            cursor: 'pointer',
          }}
          className="team__member__arrow"
          onClick={() => {
            window.localStorage.setItem('doctorIndex', index - 1);
            location.href = "/apropos#apropos__doctor__team";
          }}
        >
          <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '1rem', transform: 'rotate(-45deg)' }} />
        </div>
      </div>
      <h2>{name}</h2>
      <h3>{specialty}</h3>
    </div>
  );
};

export default MobileHomePage