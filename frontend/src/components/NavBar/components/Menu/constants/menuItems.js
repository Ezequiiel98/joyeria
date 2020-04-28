import { faFacebookSquare, faInstagram, faPinterestSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

export const NAV_MENU = [
  {
    key: 0,
    textItem: 'Home'
  },
  {
    key: 1,
    textItem: 'Anillos'
  },
  {
    key: 2,
    textItem: 'Relojes'
  },
  {
    key: 3,
    textItem: 'Alhajas'
  },
  {
    key: 4,
    textItem: 'Contacto'
  }
];

export const SOCIAL_MENU = [
  {
    key: 0,
    textItem: 'Twitter',
    icon: faTwitterSquare,
    urlProfile: 'https://twitter.com/'
  },
 
  {
    key: 1,
    textItem: 'Instagram',
    icon: faInstagram,
    urlProfile: 'https://instagram.com'
  },
  {
    key: 2,
    textItem: 'Facebook',
    icon: faFacebookSquare,
    urlProfile: 'https://facebook.com',
  }, {
    key: 3,
    textItem: 'Pinterest',
    icon: faPinterestSquare,
    urlProfile: 'https://pinterest.com'
  }
];
