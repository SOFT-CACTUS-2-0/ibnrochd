import React, { createContext, useContext, useState } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Create the language context
const LanguageContext = createContext();

// Translation resources
const resources = {
  FR: {
    translation: {
      nav: {
        home: 'Accueil',
        about: 'À propos',
        specialties: 'Spécialités',
        gallery: 'Galerie',
        contact: 'Contact',
        language: 'Langue'
      },
      home: {
        heroTitle: 'VOTRE SANTÉ,',
        heroSubtitle: 'Nos soins personnels.',
        heroDescription: 'Bienvenue dans un lieu où "votre santé, Nos soins personnels" est notre engagement.',
        moreAboutUs: 'EN SAVOIR PLUS',
        heroImageAlt: 'Clinique Ibn Rochd'
      },
      contact: {
        stayInTouch: 'Rester en contact',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
        contactInfo: 'Contact Info :',
        service: 'H24/7 Service',
        email: 'contact@cliniqueibnrochdberkane.com',
        emailPlaceholder: 'Email',
        phone1: '+212 - 536  614  446',
        phone2: '+212 - 616  569  193',
        contactUs: 'Contactez-nous',
        fullName: 'Nom et prénom',
        phone: 'Téléphone',
        message: 'Message',
        send: 'Envoyer',
        copyright: 'Tous les droits sont réservés pour SOFT CACTUS 2024'
      },
      sponsors: {
        title: 'Partenaires qui nous soutiennent',
        description: 'Nous collaborons avec des entreprises pharmaceutiques, des fournisseurs et des organisations de santé locales pour améliorer vos soins grâce à des services avancés et des produits de qualité, en appréciant leurs contributions précieuses.',
        logo: 'Logo',
        backToTop: 'Retour en haut'
      },
      gallery: {
        explore: {
          title: 'Explorez la',
          subtitle: 'Clinique Ibn Rochd',
          description: 'Excellence médicale et compassion personnalisée pour vos soins de gynécologie et de pédiatrie à BERKANE.'
        },
        videos: {
          title: 'Lorem Ipsum Dolor',
          defaultTitle: 'Lorem Ipsum',
          videoAlt: 'Vidéo'
        },
        pictures: {
          title: 'Moments Pictures',
          subtitle: 'Clinique Ibn Rochd',
          description: 'Excellence médicale et compassion personnalisée pour vos soins de gynécologie et de pédiatrie à BERKANE.',
          imageAlt: 'Image de la galerie'
        },
        pagination: {
          prev: 'Précédent',
          next: 'Suivant'
        }
      }
    }
  },
  MA: {
    translation: {
      nav: {
        home: 'الرئيسية',
        about: 'معلومات عنا',
        specialties: 'التخصصات',
        gallery: 'معرض الصور',
        contact: 'اتصل بنا',
        language: 'اللغة'
      },
      home: {
        heroTitle: 'صحتك،',
        heroSubtitle: 'رعايتنا الشخصية.',
        heroDescription: 'مرحبا بكم في مكان حيث "صحتك ورعايتنا الشخصية" هو التزامنا.',
        moreAboutUs: 'اكتشف المزيد',
        heroImageAlt: 'عيادة ابن رشد'
      },
      contact: {
        stayInTouch: 'ابق على تواصل',
        description: 'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور',
        contactInfo: 'معلومات الاتصال :',
        service: 'خدمة 24/7',
        email: 'contact@cliniqueibnrochdberkane.com',
        phone1: '+212 - 536  614  446',
        phone2: '+212 - 616  569  193',
        emailPlaceholder: 'البريد الالكتروني',
        contactUs: 'اتصل بنا',
        fullName: 'الاسم الكامل',
        phone: 'الهاتف',
        message: 'الرسالة',
        send: 'إرسال',
        copyright: 'جميع الحقوق محفوظة لـ SOFT CACTUS 2024'
      },
      sponsors: {
        title: 'شركاؤنا الداعمون',
        description: 'نتعاون مع شركات الأدوية والموردين ومنظمات الرعاية الصحية المحلية لتحسين رعايتكم من خلال الخدمات المتقدمة والمنتجات عالية الجودة، مقدرين مساهماتهم القيمة.',
        logo: 'الشعار',
        backToTop: 'العودة إلى الأعلى'
      },
      gallery: {
        explore: {
          title: 'اكتشف',
          subtitle: 'عيادة ابن رشد',
          description: 'التميز الطبي والرعاية الشخصية لخدمات طب النساء والتوليد وطب الأطفال في بركان.'
        },
        videos: {
          title: 'لوريم ايبسوم دولور',
          defaultTitle: 'لوريم ايبسوم',
          videoAlt: 'فيديو'
        },
        pictures: {
          title: 'لحظات مصورة',
          subtitle: 'عيادة ابن رشد',
          description: 'التميز الطبي والرعاية الشخصية لخدمات طب النساء والتوليد وطب الأطفال في بركان.',
          imageAlt: 'صورة من المعرض'
        },
        pagination: {
          prev: 'السابق',
          next: 'التالي'
        }
      }
    }
  },
  GB: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        specialties: 'Specialties',
        gallery: 'Gallery',
        contact: 'Contact',
        language: 'Language'
      },
      home: {
        heroTitle: 'YOUR HEALTH,',
        heroSubtitle: 'Our Personal Care.',
        heroDescription: 'Welcome to a place where "your health, Our personal care" is our commitment.',
        moreAboutUs: 'MORE ABOUT US',
        heroImageAlt: 'Ibn Rochd Clinic'
      },
      contact: {
        stayInTouch: 'Stay in Touch',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
        contactInfo: 'Contact Info :',
        service: '24/7 Service',
        email: 'contact@cliniqueibnrochdberkane.com',
        phone1: '+212 - 536  614  446',
        phone2: '+212 - 616  569  193',
        contactUs: 'Contact Us',
        fullName: 'Full Name',
        emailPlaceholder: 'Email',
        phone: 'Phone',
        message: 'Message',
        send: 'Send',
        copyright: 'All rights reserved for SOFT CACTUS 2024'
      },
      sponsors: {
        title: 'Partners Who Support Us',
        description: 'We collaborate with pharmaceutical companies, suppliers, and local healthcare organizations to enhance your care through advanced services and quality products, appreciating their valuable contributions.',
        logo: 'Logo',
        backToTop: 'Back to top'
      },
      gallery: {
        explore: {
          title: 'Explore',
          subtitle: 'Ibn Rochd Clinic',
          description: 'Medical excellence and personalized care for your gynecology and pediatric needs in BERKANE.'
        },
        videos: {
          title: 'Lorem Ipsum Dolor',
          defaultTitle: 'Lorem Ipsum',
          videoAlt: 'Video'
        },
        pictures: {
          title: 'Moments Pictures',
          subtitle: 'Ibn Rochd Clinic',
          description: 'Medical excellence and personalized care for your gynecology and pediatric needs in BERKANE.',
          imageAlt: 'Gallery Image'
        },
        pagination: {
          prev: 'Previous',
          next: 'Next'
        }
      }
    }
  }
};

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'FR', // Default language
    fallbackLng: 'FR',
    interpolation: {
      escapeValue: false
    }
  });

// Language provider component
export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('FR');

  const changeLanguage = (language) => {
    setCurrentLanguage(language);
    i18n.changeLanguage(language);
    // You might want to store the language preference in localStorage
    localStorage.setItem('preferredLanguage', language);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
