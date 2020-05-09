import {
  faFacebookSquare,
  faInstagram,
  faPinterestSquare,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons';

export const NAV_MENU = [
  {
    key: 0,
    textItem: 'Home',
    internalPath: '/'
  },
  {
    key: 1,
    textItem: 'Anillos',
    internalPath: '/anillos'
  },
  {
    key: 2,
    textItem: 'Relojes',
    internalPath: '/relojes'
  },
  {
    key: 3,
    textItem: 'Alhajas',
    internalPath: '/alhajas'
  },
  {
    key: 4,
    textItem: 'Contacto',
    internalPath: '/contacto'
  }
];

export const SOCIAL_MENU = [
  {
    key: 0,
    textItem: 'Twitter',
    icon: faTwitterSquare,
    externalPath: 'https://twitter.com/'
  },

  {
    key: 1,
    textItem: 'Instagram',
    icon: faInstagram,
    externalPath: 'https://instagram.com'
  },
  {
    key: 2,
    textItem: 'Facebook',
    icon: faFacebookSquare,
    externalPath: 'https://facebook.com'
  },
  {
    key: 3,
    textItem: 'Pinterest',
    icon: faPinterestSquare,
    externalPath: 'https://pinterest.com'
  }
];
