// components/Footer.js

const sharedBtGolfLinks = {
  instagram: 'https://www.instagram.com/buffalotracedistillery/',
};

const sharedBtRugbyLinks = {
  instagram: 'https://www.instagram.com/buffalotracedistillery/',
  facebook:  'https://www.facebook.com/buffalotracedistillery/',
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
    <footer className='footer'>
      <div className="_content">
        <div className="social">
        <h4>Connect with us…</h4>
        {Object.keys(links).length > 0 && (
          <div className="social-icons">
            {Object.entries(links).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`icon ${name}`}
                aria-label={name}
              />
            ))}
          </div>
        )}
        </div>
 
          {body.map((paragraph, i) => (
            <div class="footer-copy" key={i}>{paragraph} </div>
          ))}
        
        
      </div>
    </footer>
  );
}