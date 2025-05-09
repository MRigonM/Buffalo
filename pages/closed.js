// pages/closed.js

export default function ClosedPage({ siteConfig }) {

  const sharedBtGolfCopy = {
    title: 'Now Closed',
    body: [
      <>Unfortunately the competition is now closed. Head to our social channels to keep up to date with future promotions.</>,
    ],
  };

  const sharedBtRugbyCopy = {
    title: 'Now Closed',
    body: [
      <>Thank you for your entry, unfortunately the competition is now closed.</>,
    ],
  };

  const copyByTheme = {
    'bt-golf-on-trade': sharedBtGolfCopy,
    'bt-golf-supervalu-dunnes': sharedBtGolfCopy,
    'bt-golf-tesco': sharedBtGolfCopy,
    'bt-rugby-off-trade': sharedBtRugbyCopy,
    'bt-rugby-on-trade': sharedBtRugbyCopy,
    'XXX': {
      title: '',
      body: [
        <></>,
        <></>,
      ],
    },
    
  };

  const { title, body } = copyByTheme[siteConfig.theme];

  return (
    <main className='_main'>
    <div>
    <div className="_content">
      <h1 className="logo-image bt-logo">
        <span className="visuallyhidden">Buffalo Trace</span>
      </h1>
      <h2 className="headline typography-headline-elevated typeface-secondary uppercase">{title}</h2>

      <p>
      {body.map((paragraph, i) => (
        <p className="text-center" key={i}>{paragraph}</p>
      ))}
      </p>
    </div>
    </div>
    </main>





  );
}


