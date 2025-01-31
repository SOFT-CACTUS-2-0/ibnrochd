import React, { useEffect, useRef, useState } from 'react';
import Header from '@components/Header/Header';
import ContactInfo from '@components/ContactInfo/ContactInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelopeOpen,
  faCalendarAlt,
  faChevronRight,
  faArrowLeft,
  faArrowRight,
  faPlay,
  faChevronLeft,
  faPause
} from '@fortawesome/free-solid-svg-icons';
import Title from '@components/Title/Title';
import CardBoard from '@components/CardBoard/CardBoard';
import Contact from '@components/Contact/Contact';
import Sponsors from '@components/Sponsors/Sponsors';
import { useTranslation } from 'react-i18next';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Modal from '../../components/Modal/Modal';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="home__page">
        <ContactInfo />
        <Header>
          <HeaderContent />
        </Header>
        <BookingForm />
        <Title
          title={t('home.explore.title')}
          subtitle={t('home.explore.subtitle')}
          description={t('home.explore.description')}
        />
        <HomeVideo />
        <Title
          title={t('home.difference.title')}
          subtitle={t('home.difference.subtitle')}
          description={t('home.difference.description')}
        />
        <Features />
      </div>
      <CardBoard />
      <div className="home__page">
        <Title
          title={t('home.personalCare.title')}
          subtitle={t('home.personalCare.subtitle')}
          description={t('home.personalCare.description')}
          style={{
            title: {fontSize: '57.71px'},
            subtitle: {fontSize: '57.71px'}
          }}
        />
        <Specialties />
        <ClinicWings />
        <Title
          title={t('home.doctors.title')}
          subtitle={t('home.doctors.subtitle')}
          description={t('home.doctors.description')}
          style={{
            title: {fontSize: '57.71px'},
            subtitle: {fontSize: '57.71px'}
          }}
        />
        <Team />
        <Sponsors />
      </div>
      <Contact />
    </>
  );
};

export default HomePage;

// BookingForm Component
const BookingForm = () => {
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
          appointment_date: '' });
      }

      console.log('success')

      // Reset form
      setFormData({
        email: '',
        phone: '',
        appointment_date: ''
      });
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="render__vous__form" data-direction={isRTL ? 'rtl' : 'ltr'} style={{direction: isRTL ? 'rtl' : 'ltr'}}>
      <form>
        <table className="form-table">
          <thead>
            <tr>
              <th style={{textAlign: isRTL ? 'right' : 'left'}}>
                <label htmlFor="email">
                  <FontAwesomeIcon icon={faEnvelopeOpen} /> {t('home.bookingForm.email')}
                </label>
              </th>
              <th style={{textAlign: isRTL ? 'right' : 'left'}}>
                <label htmlFor="phone">
                  <FontAwesomeIcon icon={faPhone} /> {t('home.bookingForm.phone')}
                </label>
              </th>
              <th style={{textAlign: isRTL ? 'right' : 'left'}}>
                <label htmlFor="date">
                  <FontAwesomeIcon icon={faCalendarAlt} /> {t('home.bookingForm.date')}
                </label>
              </th>
              <th style={{ width: '167px' }}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('home.bookingForm.emailPlaceholder')}
                  style={{direction: isRTL ? 'rtl' : 'ltr'}}
                  required
                />
              </td>
              <td>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('home.bookingForm.phonePlaceholder')}
                  style={{direction: isRTL ? 'rtl' : 'ltr'}}
                  required
                />
              </td>
              <td>
                <input 
                  type="date" 
                  id="appointment_date" 
                  name="appointment_date"
                  value={formData.appointment_date}
                  onChange={handleChange}
                  style={{direction: isRTL ? 'rtl' : 'ltr'}} 
                  required 
                />
              </td>
              <td style={{ width: '167px' }}>
                <div className="form-submit">
                  <button type="submit" onClick={handleSubmit}>{t('home.bookingForm.submit')}</button>
                </div>
              </td>
            </tr>
          </tbody>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
            <h2 className="success-message">{t('contact.appointmentSuccessMessage')}</h2>
          </Modal>
        </table>
      </form>
      <h1 className='quote__title'>
      “<span>{t('home.quote')}</span>“
      </h1>
    </div>
  );
};

// HeaderContent Component
const HeaderContent = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'MA';
  return (
    <>
      <div className="stroke__home"></div>
      <div className="hero__background" data-direction={isRTL ? 'rtl' : 'ltr'}>
        <img loading="lazy" src="/21699d032d59eb23405a4c8f3e2df35b.webp" alt="Background" />
      </div>
      <div className="hero__container" data-direction={isRTL ? 'rtl' : 'ltr'}>
        <h1 className="hero__title">
          {t('home.hero.title')}, {t('home.hero.subtitle')}
        </h1>
      </div>
      <div className="hero__quote">
        {t('home.hero.description')}
        <div className="hero__cta">
          <Link to="/apropos" style={{all: 'unset',cursor:'pointer'}}>
            <button className="hero__cta__button" style={{cursor:'pointer'}}>{t('home.hero.button')}</button>
          </Link>
          <Link to="/apropos" style={{all: 'unset',cursor:'pointer'}}>
            <div className="hero__arrow" style={{cursor:'pointer'}}>
              {
                isRTL ? (
                  <FontAwesomeIcon style={{ fontSize: '1.5rem' }} icon={faArrowLeft} />
                ) : (
                  <FontAwesomeIcon style={{ fontSize: '1.5rem' }} icon={faArrowRight} />
                )
              }
          </div>
          </Link>
        </div>
      </div>
    </>
  );
};

// HomeVideo Component
const HomeVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="home__video__container" data-video-status={isPlaying}>
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
  )
};

// Features Component
const Features = () => {
  const { t } = useTranslation();
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
    <div className="features__container">
      <div className="features__image">
        <img loading="lazy" src="/08b22943500b5ee2d90ca52fb8376213.webp" alt="Features" />
      </div>
      <div className="features__list">
        {featureItems.map((item, index) => (
          <FeatureItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

// FeatureItem Component
const FeatureItem = ({ icon, title, description }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'MA';
  return (
    <div className="features__list__item" style={{direction: isRTL ? 'rtl' : 'ltr'}}>
      <div className="feature__icon">
        <img loading="lazy" src={icon} alt={title} />
      </div>
      <div className="feature__title">{title}</div>
      <div className="feature__description">{description}</div>
    </div>
  )
};

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
      <div className="home__specialites" style={{direction: isRTL ? 'rtl' : 'ltr'}}>
          <div className="specialties__title">
            {
              isRTL ? (
                <>
                  <FontAwesomeIcon icon={faChevronLeft} className="arrow" />
                  <FontAwesomeIcon icon={faChevronLeft} className="arrow" />
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faChevronRight} className="arrow" />
                  <FontAwesomeIcon icon={faChevronRight} className="arrow" />
                </>
              )
            }
            <h2 data-direction={isRTL ? 'rtl' : 'ltr'}>{t('home.specialties.title')}</h2>
          </div>
          <hr className="specialties__divider" />
          <p className="specialties__description" style={{fontSize:'18px'}}>
            {t('home.specialties.description')}
          </p>
        </div>
        {/* Pass specialties, activeIndex, and setActiveIndex to SpecialtyButtons */}
        <SpecialtyButtons
          specialties={specialties}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        {/* Pass handlers to NavigationControls */}
        <NavigationControls onNext={handleNext} onPrev={handlePrev} activeIndex={activeIndex} totalButtons={specialties.length} />
    </>
  );
};

// SpecialtyButtons Component
const SpecialtyButtons = ({ specialties, activeIndex, setActiveIndex }) => {
  return (
    <div className="button__group">
      {specialties.map((specialty, index) => (
        <div
          key={index}
          className={`button__item ${index === activeIndex ? 'active' : ''}`}
          onClick={() => setActiveIndex(index)}
          style={{cursor:'pointer'}}
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

// NavigationControls Component
const NavigationControls = ({ onNext, onPrev, activeIndex, totalButtons }) => (
  <div className="back__next__container">
    <div className="current__item__container" style={{position: 'relative'}}>
      <div className="current__item__indicator" style={{width:'33%',transform: `translateX(calc(100% * ${((activeIndex + totalButtons) % totalButtons)}))`, position: 'absolute'}}></div>
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

// ClinicWings Component
const ClinicWings = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'MA';
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex < clinicWingData[0].videos.length ? prevIndex + 1 : prevIndex
    );
    setCurrentContentIndex((prevIndex) =>
      prevIndex < 7 ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > -1 ? prevIndex - 1 : -1
    );
    setCurrentContentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : 7
    );
  };

  const currentWing = clinicWingData[0];

  return (
    <>
      <Title
        title={t('home.clinicWings.title')}
        subtitle={t('home.clinicWings.subtitle')}
        description={t('home.clinicWings.description')}
        style={{
          title: {fontSize: '57.71px'},
          subtitle: {fontSize: '57.71px'}
        }}
      />
      <div className="stages__container" style={{flexDirection: isRTL ? 'row-reverse' : 'row'}}>
        <ClinicWing
          number={currentWing.number}
          title={currentWing.title}
          description={currentWing.description}
          videos={currentWing.videos}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </div>
    </>
  );
};

const ClinicWing = ({
  number,
  title,
  description,
  videos,
  currentIndex,
  setCurrentIndex,
  onNext,
  onPrev
}) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'MA';
  const videoWidth = 30;
  const gap = 1; // Gap between video cards
  const slideWidth = videoWidth + gap;
  const totalSlides = videos.length;
  const videoRefs = useRef([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  // Clone first and last videos
  const extendedVideos = [videos[videos.length - 1], ...videos, ...videos];
  const trackRef = useRef(null);

  const handleThumbnailClick = (index) => {
    setActiveVideo(index);
    setTimeout(() => {
      if (videoRefs.current[index]) {
        videoRefs.current[index].play();
        setIsPlaying(true);
      }
    }, 50);
  };

  const handlePlayClick = (index) => {
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
        setIsPlaying(true);
      } else {
        videoElement.pause();
        setIsPlaying(false);
      }
    }
  };

  // Calculate the translation amount
  const translateX = -((currentIndex + 1) * slideWidth);

  // Apply translation with transition when currentIndex changes
  useEffect(() => {
    const track = trackRef.current;
  
    const handleTransitionEnd = () => {
      if (currentIndex === -1) {
        // Move to the last real slide without transition
        track.style.transition = 'none';
        track.style.transform = `translateX(-${slideWidth * totalSlides}vw)`;
        setCurrentIndex(totalSlides - 1);
      } else if (currentIndex === totalSlides) {
        // Move to the first real slide without transition
        track.style.transition = 'none';
        track.style.transform = `translateX(-${slideWidth}vw)`;
        setCurrentIndex(0);
      }
    };
  
    // Apply the transform with transition
    track.style.transition = 'transform 0.5s ease';
    track.style.transform = `translateX(${translateX}vw)`;
  
    // Add the transitionend event listener
    track.addEventListener('transitionend', handleTransitionEnd);
  
    // Cleanup event listener on unmount or when dependencies change
    return () => {
      track.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [translateX, currentIndex, totalSlides, slideWidth]);

  const handleNext = () => {
    // Stop current video if playing
    const currentVideo = videoRefs.current[currentIndex + 1];
    if (currentVideo) {
      currentVideo.pause();
      setIsPlaying(false);
    }
    onNext(currentIndex + 1);
  };

  const handlePrev = () => {
    // Stop current video if playing
    onPrev(currentIndex - 1);
  };


  return (
    <>
      <div className="header-section" data-direction={isRTL ? 'rtl' : 'ltr'} style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
        <div className="header-section__number">{parseInt(number) + 2}</div>
        <div className="header-section__content">
          <h1 className="header-section__title">{title}</h1>
          <hr style={{ width: '300.5px' }} />
          <ul className="header-section__description">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="image-carousel__container">
        <div className="image-carousel" style={{ overflow: 'hidden' }}>
          <div
            className="image-carousel__track"
            ref={trackRef}
            style={{ display: 'flex' }}
          >
            {extendedVideos.map((src, index) => (
              <div
                key={index}
                className="image-carousel__card"
                style={{
                  height: 'auto',
                  width: `${videoWidth}vw`,
                  aspectRatio: '253 / 359',
                  marginRight: `${gap}vw`,
                }}
              >
                {activeVideo === index ? (
                  <video
                    ref={el => videoRefs.current[index] = el}
                    loading="lazy"
                    src={`${src}#t=1`}
                    alt={`Video ${index}`}
                    style={{ width: '100%' }}
                    onClick={() => handlePlayClick(index)}
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
                {(index - 1 === currentIndex || index + 2 === currentIndex) && (
                  <div 
                    className="play-icon"
                    onClick={() => activeVideo === index ? handlePlayClick(index) : handleThumbnailClick(index)}
                    style={{
                      opacity: isPlaying && activeVideo === index ? 0 : 1,
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      cursor: 'pointer'
                    }}
                  >
                    <FontAwesomeIcon icon={faPlay} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <ImageNavigation
          currentIndex={currentIndex}
          totalImages={totalSlides}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </div>
    </>
  );
};

// ImageNavigation Component
const ImageNavigation = ({ currentIndex, totalImages, onNext, onPrev }) => (
  <div className="navigation-controls">
    <div className="arrows">
      <div className="icon__arrow left" onClick={onPrev}>
        <FontAwesomeIcon icon={faArrowLeft} className="navigation-controls__arrow" />
      </div>
      <div className="icon__arrow right" onClick={onNext}>
        <FontAwesomeIcon icon={faArrowRight} className="navigation-controls__arrow" />
      </div>
    </div>
    <div className="numbers">
      <span className="navigation-controls__number">
        {
          String(((currentIndex + totalImages) % totalImages) + 1).padStart(2, '0')
        }
      </span>
      <div className="indicator__container" style={{position: 'relative'}}>
        <div className="indicator" style={{width:`${100 / totalImages}%`,transform: `translateX(calc(100% * ${((currentIndex + totalImages) % totalImages)}))`, position: 'absolute'}}></div>
      </div>
      <span className="navigation-controls__number">
        {String(totalImages).padStart(2, '0')}
      </span>
    </div>
  </div>
);

// Team Component
const Team = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const teamContainerRef = useRef(null);
  const memberWidth = 230; // Width of each team member card
  const gap = 25; // Gap between team member cards
  const slideWidth = memberWidth + gap;

  const teamMembers = t('home.doctors.team', { returnObjects: true });
  const totalMembers = teamMembers.length;

  // Clone first and last members for infinite looping
  const extendedMembers = [...teamMembers, ...teamMembers];

  // Calculate the translation amount
  const translateX = -((currentIndex + 1) * slideWidth);

  useEffect(() => {
    const teamContainer = teamContainerRef.current;
  
    const handleTransitionEnd = () => {
      if (currentIndex === -1) {
        // Move to the last real slide without transition
        teamContainer.style.transition = 'none';
        teamContainer.style.transform = `translateX(-${slideWidth * totalMembers}px)`;
        setCurrentIndex(totalMembers - 1);
      } else if (currentIndex === totalMembers) {
        // Move to the first real slide without transition
        teamContainer.style.transition = 'none';
        teamContainer.style.transform = `translateX(-${slideWidth}px)`;
        setCurrentIndex(0);
      }
    };
  
    // Apply the transform with transition
    teamContainer.style.transition = 'transform 0.5s ease';
    teamContainer.style.transform = `translateX(${translateX}px)`;
  
    // Add the transitionend event listener
    teamContainer.addEventListener('transitionend', handleTransitionEnd);
  
    // Cleanup event listener on unmount or when dependencies change
    return () => {
      teamContainer.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [translateX, currentIndex, totalMembers, slideWidth]);

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
      width: '995px',
      margin: 'auto',
      overflow: 'hidden'
    }}>
      <div className="team__container" ref={teamContainerRef}>
      <div
          className="team__track"
            style={{
              display: 'flex'
            }}
          >
        {extendedMembers.map((member, index) => (
          <TeamMember key={index} {...member} memberWidth={`${memberWidth}px`} gap={`${gap}px`} index={index}/>
        ))}
        </div>
      </div>
        <div className="back__next__container" style={{paddingInline:'0rem'}}>
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
      </div>
    </>
  );
};

// TeamMember Component
const TeamMember = ({ name, specialty, image, isDefault, memberWidth, gap, index }) => {
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
      width: memberWidth,
      marginRight: gap,
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
            window.localStorage.setItem('doctorIndex', index);
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