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
} from '@fortawesome/free-solid-svg-icons';
import Title from '@components/Title/Title';
import CardBoard from '@components/CardBoard/CardBoard';
import Contact from '@components/Contact/Contact';
import Sponsors from '@components/Sponsors/Sponsors';
import { useTranslation } from 'react-i18next';
import './HomePage.css';

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
                  placeholder={t('home.bookingForm.phonePlaceholder')}
                  style={{direction: isRTL ? 'rtl' : 'ltr'}}
                  required
                />
              </td>
              <td>
                <input type="date" id="date" name="date" style={{direction: isRTL ? 'rtl' : 'ltr'}} required />
              </td>
              <td style={{ width: '167px' }}>
                <div className="form-submit">
                  <button type="submit">{t('home.bookingForm.submit')}</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

// HeaderContent Component
const HeaderContent = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'MA';
  return (
    <>
      <div className="hero__background" data-direction={isRTL ? 'rtl' : 'ltr'}>
        <img loading="lazy" src="/13f00b97db4641b3ed6c7b387b771752.webp" alt="Background" />
      </div>
      <div className="hero__container" data-direction={isRTL ? 'rtl' : 'ltr'}>
        <h1 className="hero__title">
          {t('home.hero.title')},
          <br />
          {t('home.hero.subtitle')}
        </h1>
        <p className="hero__description" data-direction={isRTL ? 'rtl' : 'ltr'}>
          {t('home.hero.description')}
        </p>
        <div className="hero__cta">
          <button className="hero__cta__button">{t('home.hero.button')}</button>
          <div className="hero__arrow">
            {
              isRTL ? (
                <FontAwesomeIcon style={{ fontSize: '1.5rem' }} icon={faArrowLeft} />
              ) : (
                <FontAwesomeIcon style={{ fontSize: '1.5rem' }} icon={faArrowRight} />
              )
            }
          </div>
        </div>
      </div>
      <div className="hero__quote">
        {t('home.quote')}
      </div>
    </>
  );
};

// HomeVideo Component
const HomeVideo = () => (
  <div className="home__video__container">
    <img loading="lazy" src="/background.webp" alt="Home" />
    <div className="play-icon">
      <FontAwesomeIcon icon={faPlay} />
    </div>
  </div>
);

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
        />
        {/* Pass handlers to NavigationControls */}
        <NavigationControls onNext={handleNext} onPrev={handlePrev} activeIndex={activeIndex} totalButtons={specialties.length} />
    </>
  );
};

// SpecialtyButtons Component
const SpecialtyButtons = ({ specialties, activeIndex }) => {
  return (
    <div className="button__group">
      {specialties.map((specialty, index) => (
        <div
          key={index}
          className={`button__item ${index === activeIndex ? 'active' : ''}`}
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
      images: [
        '/b8dabe7f11276a7a5a058c97166b0c15.webp',
        '/f800cfb2aa8238b84077530434eb11c5.webp',
        '/300726901718ac044bf52aa78933c642.webp',
      ]
    },
    // You can add more clinic wing data here if needed
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex < clinicWingData[0].images.length ? prevIndex + 1 : prevIndex
    );
    setCurrentContentIndex((prevIndex) =>
      prevIndex < 5 - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > -1 ? prevIndex - 1 : -1
    );
    setCurrentContentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : 5 - 1
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
          images={currentWing.images}
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
  images,
  currentIndex,
  setCurrentIndex,
  onNext,
  onPrev,
}) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'MA';
  const imageWidth = 40; // Width of each image card
  const gap = 1; // Gap between image cards
  const slideWidth = imageWidth + gap;
  const totalSlides = images.length;

  // Clone first and last images
  const extendedImages = [images[images.length - 1], ...images, ...images];
  const trackRef = useRef(null);

  // Calculate the translation amount
  const translateX = -((currentIndex + 1) * slideWidth);

  // Apply translation with transition when currentIndex changes
  useEffect(() => {
    const track = trackRef.current;
  
    const handleTransitionEnd = () => {
      if (currentIndex === -1) {
        // Move to the last real slide without transition
        track.style.transition = 'none';
        track.style.transform = `translateX(-${slideWidth * totalSlides}%)`;
        setCurrentIndex(totalSlides - 1);
      } else if (currentIndex === totalSlides) {
        // Move to the first real slide without transition
        track.style.transition = 'none';
        track.style.transform = `translateX(-${slideWidth}%)`;
        setCurrentIndex(0);
      }
    };
  
    // Apply the transform with transition
    track.style.transition = 'transform 0.5s ease';
    track.style.transform = `translateX(${translateX}%)`;
  
    // Add the transitionend event listener
    track.addEventListener('transitionend', handleTransitionEnd);
  
    // Cleanup event listener on unmount or when dependencies change
    return () => {
      track.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [translateX, currentIndex, totalSlides, slideWidth]);

  const handleNext = () => {
    onNext(currentIndex + 1);
  };

  const handlePrev = () => {
    onPrev(currentIndex - 1);
  };

  return (
    <>
      <div className="header-section" data-direction={isRTL ? 'rtl' : 'ltr'} style={{direction: isRTL ? 'rtl' : 'ltr'}}>
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
            style={{
              display: 'flex',
            }}
          >
            {extendedImages.map((src, index) => (
              <div
                key={index}
                className="image-carousel__card"
                style={{
                  width: `${imageWidth}%`,
                  aspectRatio: '253 / 359',
                  height: 'auto',
                  marginRight: `${gap}vw`,
                }}
              >
                <img
                  loading="lazy"
                  src={src}
                  alt={`Image ${index}`}
                  style={{ width: '100%' }}
                />
                {
                  index - 1 === currentIndex && (
                    <div className="play-icon">
                      <FontAwesomeIcon icon={faPlay} />
                    </div>
                  )
                }
                {
                  index + 2 === currentIndex && (
                    <div className="play-icon">
                      <FontAwesomeIcon icon={faPlay} />
                    </div>
                  )
                }
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
        <div className="indicator" style={{width:'33%',transform: `translateX(calc(100% * ${((currentIndex + totalImages) % totalImages)}))`, position: 'absolute'}}></div>
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
          <TeamMember key={index} {...member} memberWidth={`${memberWidth}px`} gap={`${gap}px`}/>
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
const TeamMember = ({ name, specialty, image, memberWidth, gap }) => {
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
        <img loading="lazy" src={image} alt={name} />
        <div
          style={{
            '--cos': angles.cos,
            '--sin': angles.sin,
          }}
          className="team__member__arrow"
        >
          <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '1rem', transform: 'rotate(-45deg)' }} />
        </div>
      </div>
      <h2>{name}</h2>
      <h3>{specialty}</h3>
    </div>
  );
};