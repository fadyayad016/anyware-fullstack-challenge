import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcomeMessage": "Welcome Talia,",
      "logoutButton": "Logout",
      "examsTime": {
        "title": "EXAMS TIME",
        "description": "Here we are, Are you ready to fight? Don't worry, we prepared some tips to be ready for your exams.",
        "button": "View exams tips"
      },
      "announcements": "Announcements",
      "whatsDue": "What's due",
      "allLink": "All"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;