module.exports = {
  siteTitle: 'Ahmed Hussein | Software Engineer',
  siteDescription:
    'Ahmed Hussein is a software engineer based in Cairo, EG specializing in building exceptional, high-quality mobile/web applications.',
  siteKeywords:
    'Ahmed Hussein, Ahmed, Hussein, ahmedcodeguy, software engineer, front-end engineer, mobile developer, javascript, react native developer',
  siteUrl: 'https://ahmed-hussein.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'none',
  googleVerification:
    process.env.GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE ||
    '3ese3zfH3BODDHivtSFfdwBn_mNCOwpkGEJEYYcCNJ0',
  name: 'Ahmed Hussein',
  location: 'Cairo, EG',
  email: 'ahmedhussein.developer@gmail.com',
  github: 'https://github.com/ahmedCodeGuy',
  twitterHandle: '@ahmedCodeGuy',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ahmedCodeGuy',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ahmed-hussein-developer/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ahmedcodeguy',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
