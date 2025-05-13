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
      <p className="text-center mb">We will be drawing a winner on xx/xx/xxxx <br/>
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
        <h1 className="logo-image bt-logo">
          <span className="visuallyhidden">Friexenet</span>
        </h1>
        <h2 className="headline typography-headline-elevated typeface-secondary uppercase text-center">{title}</h2>

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