// pages/closed.js

export default function ClosedPage({ siteConfig }) {

  const sharedBtGolfCopy = {
    title: 'Unfortunately this promotion is now closed',
    body: [
      <>Unfortunately this promotion is now closed</>,
    ],
  };

  const sharedBtRugbyCopy = {
    title: 'Unfortunately this promotion is now closed',
    body: [
      <>In the meantime, have a <br/> scroll on our socials for <br/> more Freixenet content!</>,
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
      <div className="logo-wrapper">
          <h1 className="logo-image bt-logo">
            <span className="visuallyhidden">Freixenet</span>
          </h1>
        </div>
        <p className="logo-image bt-x-dp-wt-headline"></p>
      <h2 className="headline typography-headline-elevated typeface-secondary text-center">{title}</h2>

      <p>
      {body.map((paragraph, i) => (
        <p className="text-center typography-body-text" key={i}>{paragraph}</p>
      ))}
      </p>
    </div>
    </div>
    </main>





  );
}


