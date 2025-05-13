// components/Footer.js

import Link from "next/link";

const sharedBtGolfLinks = {
  instagram: 'https://www.instagram.com/freixenetuk/',
};

const sharedBtRugbyLinks = {
  instagram: 'https://www.instagram.com/freixenetuk/',
  facebook:  'https://www.facebook.com/freixenetuk/',
  x:         'https://www.x.com/',
};

const SOCIAL_LINKS_BY_THEME = {};
['bt-golf-tesco', 'bt-golf-supervalu-dunnes', 'bt-golf-on-trade']
  .forEach(theme => SOCIAL_LINKS_BY_THEME[theme] = sharedBtGolfLinks);
['bt-rugby-off-trade', 'bt-rugby-on-trade']
  .forEach(theme => SOCIAL_LINKS_BY_THEME[theme] = sharedBtRugbyLinks);

const sharedGolfCopy = {
  body: [
    <>
    <span>Please drink responsibly</span> 
    <a class="logo-image drink-aware-ie" href="https://drinkaware.ie" target="_blank" rel="noopener noreferrer">
   
        <span className="visuallyhidden">Get the facts. Be DRINKAWARE. Visit drinkaware.ie</span>
 
    </a>
    </>,
],
};

const sharedRugbyCopy = {
  body: [
    <>
    <span>Please drink responsibly</span> 
    <a class="logo-image drink-aware" href="https://drinkaware.ie" target="_blank" rel="noopener noreferrer">
      
        <span className="visuallyhidden">https://www.drinkaware.co.uk</span>
 
    </a>
    </>,
],
};

const COPY_BY_THEME = {
  'bt-golf-tesco': sharedGolfCopy,
  'bt-golf-supervalu-dunnes': sharedGolfCopy,
  'bt-golf-on-trade': sharedGolfCopy,
  'bt-rugby-off-trade': sharedRugbyCopy,
  'bt-rugby-on-trade': sharedRugbyCopy,
  'XXXX': {
      title: 'XXXX',
      body: [
        <>XXXX</>,
        <>XXXX</>,
      ],
    },
};

export default function Footer({ siteConfig = {} }) {
  const theme = siteConfig.theme || '';
  const links = SOCIAL_LINKS_BY_THEME[theme] || {};
  const { body } = COPY_BY_THEME[theme] || { body: [] };

  return (
      <footer className="footer">
        <div className="_content footer-row">
          <div className="footer-links">
            <a href="https://www.sazerac.ie/cookie-notice/" target="_blank" rel="noopener noreferrer">Cookie Policy</a>
            <span>|</span>
            <Link href="/terms">Terms</Link>
            <span>|</span>
            <a href="https://www.sazerac.ie/cookie-notice/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          </div>

          <div className="footer-social-text">
            <a href="https://www.instagram.com/freixenetuk" target="_blank" rel="noopener noreferrer">
              <span className="instagram-icon"/> @freixenetuk
            </a>
          </div>

          <div className="footer-responsibility">
            Please Drink Responsibly
          </div>
        </div>
      </footer>

  );
}