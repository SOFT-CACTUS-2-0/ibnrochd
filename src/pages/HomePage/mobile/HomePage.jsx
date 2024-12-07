import React, { useEffect, useRef, useState } from 'react'
import '../HomePage.css';
import './HomePage.css'
import Navbar from '@components/Navbar/mobile/Navbar'
import Title from '@components/Title/Title'
import CardBoard from '@components/CardBoard/mobile/CardBoard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Sponsors from '@components/Sponsors/Sponsors';
import Contact from '@components/Contact/mobile/Contact';
import { faArrowLeft, faArrowRight, faCalendarAlt, faChevronRight, faEnvelopeOpen, faPhone, faPlay } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';

const MobileHomePage = () => {
  const { t } = useTranslation();

  return (
    <div className='home__page__mobile'>
        <Navbar />
        <div className="home__mobile__hero">
            <div className="hero__mobile__content">
                <h1 className="hero__mobile__title">
                    {t('home.heroTitle')}<br />
                    {t('home.heroSubtitle')}
                </h1>
                <p className="hero__mobile__description">
                    {t('home.heroDescription')}
                </p>
                <div className="hero__mobile__cta">
                    <button className="hero__cta__mobile__button">
                        {t('home.moreAboutUs')}
                    </button>
                    <div className="hero__arrow__mobile">
                        <FontAwesomeIcon style={{ fontSize: '1.2rem' }} icon={faArrowRight} />
                    </div>
                </div>
            </div>
            <div className="hero__mobile__image">
                <img src="/13f00b97db4641b3ed6c7b387b771752.webp" alt={t('home.heroImageAlt')} />
            </div>
        </div>
        <div className="booking__form__mobile">
            <form>
                <div className="form-container">
                    <div className="form-field">
                    <label htmlFor="email">
                        <FontAwesomeIcon icon={faEnvelopeOpen} /> Adresse E-mail
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Votre E-mail"
                        required
                    />
                    </div>
                    <div className="form-field">
                    <label htmlFor="phone">
                        <FontAwesomeIcon icon={faPhone} /> Numéro de téléphone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Téléphone"
                        required
                    />
                    </div>
                    <div className="form-field">
                    <label htmlFor="date">
                        <FontAwesomeIcon icon={faCalendarAlt} /> Date
                    </label>
                    <input type="date" id="date" name="date" required />
                    </div>
                    <div className="form-submit">
                    <button type="submit">Rendez-vous</button>
                    </div>
                </div>
            </form>
        </div>
        <div className="video__mobile__section">
            <Title
                title="Explorez la"
                subtitle="Clinique Ibn Rochd"
                description="Excellence médicale et compassion personnalisée pour vos soins de gynécologie et de pédiatrie à BERKANE."
                style={{
                    title: {fontSize: '24px',lineHeight:'28px'},
                    subtitle: {fontSize: '24px',lineHeight:'28px'},
                    description: {fontSize: '16px',lineHeight:'20px'},
                    container: {marginBlock: '1rem',width:'100%'}
                }}
            />
            <HomeVideo />
            <Title
                title="Ce qui fait la différence"
                subtitle="Chez Ibn Rochd"
                description="À la Clinique Ibn Rochd, notre engagement se traduit par une approche centrée sur la qualité des soins de gynécologie et de pédiatrie ainsi que sur le bien-être de nos patientes."
                style={{
                    title: {fontSize: '24px',lineHeight:'28px'},
                    subtitle: {fontSize: '24px',lineHeight:'28px'},
                    description: {fontSize: '16px',lineHeight:'20px'},
                    container: {marginBlock: '1rem',width:'100%'}
                }}
            />
            <Features />
            <CardBoard />
            <Title
                title="Soins personnels"
                subtitle="Et vie saine"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."
                style={{
                    title: {fontSize: '24px',lineHeight:'28px'},
                    subtitle: {fontSize: '24px',lineHeight:'28px'},
                    description: {fontSize: '16px',lineHeight:'20px'},
                    container: {marginBlock: '1rem',width:'100%'}
                }}
            />
            <Specialties />
            <Title
              title="Les ailes de"
              subtitle="La clinique"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."
              style={{
                title: {fontSize: '24px',lineHeight:'28px'},
                subtitle: {fontSize: '24px',lineHeight:'28px'},
                description: {fontSize: '16px',lineHeight:'20px'},
                container: {marginBlock: '1rem',width:'100%'}
              }}
            />
            <ClinicWing
              number="01"
              title="Premier étage"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              images={[
                '/b8dabe7f11276a7a5a058c97166b0c15.webp',
                '/f800cfb2aa8238b84077530434eb11c5.webp',
                '/300726901718ac044bf52aa78933c642.webp',
              ]}
            />
            <Title
              title="NOS"
              subtitle="MEDECINS"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua."
              style={{
                title: {fontSize: '24px',lineHeight:'28px'},
                subtitle: {fontSize: '24px',lineHeight:'28px'},
                description: {fontSize: '16px',lineHeight:'20px'},
                container: {marginBlock: '1rem',width:'100%'}
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
  const specialties = [
    'Gynécologie obstétricale',
    'Pédiatrie et néonatalogie',
    'Ophtalmologie',
  ];

  // State to keep track of the active specialty index
  const [activeIndex, setActiveIndex] = useState(1);

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
      <div className="home__specialites" style={{width:'100%',height:'fit-content',gap:'1rem',padding:'0'}}>
        <div className="specialties__title">
          <FontAwesomeIcon icon={faChevronRight} className="arrow" />
          <FontAwesomeIcon icon={faChevronRight} className="arrow" />
          <h2>Spécialités</h2>
        </div>
        <hr className="specialties__divider" />
        <p className="specialties__description">
          À la Clinique Ibn Rochd, notre engagement se traduit par une approche
          centrée sur la qualité des soins de gynécologie et de pédiatrie ainsi
          que sur le bien-être de nos patientes.
        </p>
      </div>
      <SpecialtyButtons
        specialties={specialties}
        activeIndex={activeIndex}
      />
      <NavigationControls onNext={handleNext} onPrev={handlePrev} activeIndex={activeIndex} totalButtons={specialties.length} />
    </>
  )
}

// HomeVideo Component
const HomeVideo = () => (
    <div className="home__video__mobile__container">
      <img loading="lazy" src="/background.webp" alt="Home" />
      <div className="play-icon">
        <FontAwesomeIcon icon={faPlay} />
      </div>
    </div>
  );

// NavigationControls Component
const NavigationControls = ({ onNext, onPrev, activeIndex, totalButtons }) => (
  <div className="back__next__container" style={{width:'100%',display:'flex',paddingInline:'0'}}>
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
const SpecialtyButtons = ({ specialties, activeIndex }) => {
  return (
    <div className="button__group" style={{width:'100%',display:'block',paddingInline:'0'}}>
      {specialties.map((specialty, index) => (
        <div
          key={index}
          className={`button__item ${index === activeIndex ? 'active' : ''}`}
          style={{paddingInline:'1rem'}}
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageContainerRef = useRef(null);
  const imageWidth = Math.min(window.innerWidth * 0.85, 400);
  const gap = 32;
  // Clone first and last images
  const extendedImages = [images[images.length - 1], ...images, images[0]];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex < images.length ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > -1 ? prevIndex - 1 : -1
    );
  };

    useEffect(() => {
        const imageContainer = imageContainerRef.current;

        const handleTransitionEnd = () => {
                if (currentIndex === -1) {
                // Move to the last real slide without transition
                    imageContainer.style.transition = 'none';
                    setCurrentIndex(images.length - 1);
                    imageContainer.style.transform = `translateX(-${(imageWidth + gap) * (images.length)}px)`;
            } else if (currentIndex === images.length) {
                    // Move to the first real slide without transition
                    imageContainer.style.transition = 'none';
                setCurrentIndex(0);
                    imageContainer.style.transform = `translateX(0px)`;
            }
        };

    imageContainer.style.transition = 'transform 0.5s ease-in-out';
        imageContainer.style.transform = `translateX(-${currentIndex * (imageWidth + gap)}px)`;

        imageContainer.addEventListener('transitionend', handleTransitionEnd);
        return () => {
            imageContainer.removeEventListener('transitionend', handleTransitionEnd);
        }
    }, [currentIndex, images, imageWidth, gap]);

  return (
    <>
      <div className="header-section" style={{ width: '100%' }}>
        <div className="header-section__content">
          <h1 className="header-section__title">{title}</h1>
          <hr style={{ width: '78vw' }} />
          <p className="header-section__description">{description}</p>
        </div>
      </div>
      <div className="image-carousel__container-mobile" style={{alignSelf:'flex-start',width:'100%'}}>
                <div className="image-carousel-mobile" ref={imageContainerRef}
                    style={{
                        display: 'flex',
                        transition: 'transform 0.5s ease-in-out',
                        width: '100%',
                        gap: '2rem',
                }}>
                    {extendedImages.map((src, index) => (
            <div key={index} className="image-carousel__card" style={{width:'min(85vw,400px)',aspectRatio:'254 / 359',height:'unset'}}>
                <img loading="lazy" src={src} alt={`Image ${index + 1}`} style={{width:'100%'}}/>
                            {index === currentIndex && (
                  <div className="play-icon">
                                    <FontAwesomeIcon icon={faPlay} />
                  </div>
                )}
              </div>
                    ))}
        </div>
        <ImageNavigation currentIndex={currentIndex} totalImages={images.length} onNext={handleNext} onPrev={handlePrev} />
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
const Features = () => (
    <div className="features__container" style={{flexDirection:'column',width:'100%',height:'fit-content',gap:'4rem',marginBlock:'2rem'}}>
      <div className="features__image" style={{width:'100%',height:'100%'}}>
        <img loading="lazy" src="/08b22943500b5ee2d90ca52fb8376213.webp" alt="Features" />
      </div>
      <div className="features__list" style={{ gridTemplateColumns: '1fr',width:'100%' }}>
        {featureItems.map((item, index) => (
          <FeatureItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
  
  const featureItems = [
    {
      icon: '/features/microscope.svg',
      title: 'Technologies avancées',
      description:
        'Nous utilisons des équipements de pointe pour des diagnostics précis et des traitements efficaces, assurant des soins de santé de classe mondiale.',
    },
    {
      icon: '/features/security.svg',
      title: 'Confort et sécurité',
      description:
        'Nous créons un environnement accueillant et sûr, où le confort et la sécurité de nos patientes sont nos priorités absolues.',
    },
    {
      icon: '/features/care.svg',
      title: 'Soins personnalisés',
      description:
        'Chaque patiente reçoit une attention individualisée avec des plans de traitement adaptés à ses besoins spécifiques.',
    },
    {
      icon: '/features/equipe.svg',
      title: 'Équipe expérimentée',
      description:
        'Nos professionnels médicaux et paramédicaux, hautement qualifiés, garantissent des soins de qualité supérieure et une expérience positive.',
    },
  ];
  
  // FeatureItem Component
  const FeatureItem = ({ icon, title, description }) => (
    <div className="features__list__item" style={{width:'100%'}}>
      <div className="feature__icon">
        <img loading="lazy" src={icon} alt={title} />
      </div>
      <div className="feature__title">{title}</div>
      <div className="feature__description" style={{width:'100%'}}>{description}</div>
    </div>
  );  

// Team Component
const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const teamContainerRef = useRef(null);
  const memberHeight = 290;
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
              height: '1235px',
            }}
          >
        {extendedMembers.map((member, index) => (
          <TeamMember key={index} {...member} memberHeight={`${memberHeight}px`} gap={`${gap}px`}/>
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

const teamMembers = [
    {
      name: 'Hajar BADAOUI',
      specialty: 'Traumatologie',
      image: '/6f0db22bb3bd80edeba55fc061be9d3a.webp',
    },
    {
      name: 'Mohammed RSN',
      specialty: 'Urologie',
      image: '/8eca4d911be4f2553f59cf9923b5fb0d.webp',
    },
    {
      name: 'Hajar BADAOUI',
      specialty: 'Traumatologie',
      image: '/6f0db22bb3bd80edeba55fc061be9d3a.webp',
    },
    {
      name: 'Mohammed RSN',
      specialty: 'Urologie',
      image: '/8eca4d911be4f2553f59cf9923b5fb0d.webp',
    },
  ];

// TeamMember Component
const TeamMember = ({ name, specialty, image, memberHeight, gap }) => {
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

export default MobileHomePage