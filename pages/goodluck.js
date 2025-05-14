import Image from 'next/image';
export default function GoodLuck({ siteConfig }) {
  const sharedBtGolfCopy = {
    title: 'Thank you for entering good luck',
    body: [
      <>
        <p className="text-center">We will be drawing a winner on xx/xx/xxxx <br/>
          Please keep an eye in your email inbox to see if you&#39;re one of our lucky winners!</p>
      </>
    ],
  };

  const sharedBtRugbyCopy = {
    title: 'Thank you for entering good luck',
    body: [
      <>
      <p className="text-center typography-body-text">We will be drawing a winner on xx/xx/xxxx <br/>
        Please keep an eye in your email inbox to see if you&#39;re one of our lucky winners!</p>
      </>
    ],
  };

  const copyByTheme = {
    'bt-golf-on-trade': sharedBtGolfCopy,
    'bt-golf-supervalu-dunnes': sharedBtGolfCopy,
    'bt-golf-tesco': sharedBtGolfCopy,
    'bt-rugby-off-trade': sharedBtRugbyCopy,
    'bt-rugby-on-trade': sharedBtRugbyCopy,
    'XXXX': {
      title: 'XXXX',
      body: [
        <>XXXX</>,
        <>XXXX</>,
      ],
    },
    default: {
      title: '',
      body: [
        <></>,
      ],
    },
  };

  const { title, body } = copyByTheme[siteConfig.theme] || copyByTheme.default;

  return (
    <main className='_main'>
      <div className="_content">
        <div className="logo-wrapper">
          <h1 className="logo-image bt-logo">
            <span className="visuallyhidden">Freixenet</span>
          </h1>
        </div>
        <p className="logo-image bt-x-dp-wt-headline"></p>
        <h2 className="headline typography-headline-elevated typeface-secondary text-center">{title}</h2>

        {/* Map through body without wrapping in a <p> */}
        {body.map((paragraph, i) => (
          <div key={i}>
            {paragraph}
          </div>
        ))}
      </div>
    </main>
  );
}