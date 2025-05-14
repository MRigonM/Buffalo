import { useRouter } from 'next/router';

export default function Home({ siteConfig }) {
  const router = useRouter();

  // Shared text for all themes
  const sharedBtGolfCopy = {
    title: [
      <>
        <div className="logo-wrapper">
          <h1 className="logo-image bt-logo">
            <span className="visuallyhidden">Freixenet</span>
          </h1>
        </div>
      </>
    ],
    body: [
      <>
        <p className="logo-image">
          <span className="visuallyhidden">Win two full a trip for two at the Prestigious BMW PGA Championship</span>
        </p>
      </>
    ],
  };

  const sharedBtRugbyCopy = {
    title: [
      <>
        <div className="logo-wrapper">
          <h1 className="logo-image bt-logo">
            <span className="visuallyhidden">Freixenet</span>
          </h1>
        </div>
      </>
    ],
    body: [
      <>
        <p className="logo-image">
          <span className="visuallyhidden">Win tickets to the Gallagher Premiership Rugby Final</span>
        </p>
        <p className="subhead-copy">
          <span className="visuallyhidden">Plus More!</span>
        </p>
      </>
    ],
  };

  // Mapping themes to their respective content
  const copyByTheme = {
    'bt-golf-on-trade': sharedBtGolfCopy,
    'bt-golf-supervalu-dunnes': sharedBtGolfCopy,
    'bt-rugby-off-trade': sharedBtRugbyCopy,
    'bt-rugby-on-trade': sharedBtRugbyCopy,
    'bt-golf-tesco': {
      title: [
        <>
          <h1 className="logo-image bt-x-dp-wt-logo">
            <span className="visuallyhidden">Buffalo Trace | DP World Tour</span>
          </h1>
        </>
      ],
      body: [
        <>
          <p className="logo-image ">
            <span className="visuallyhidden">Win two full access tickets to the Irish Open at the K Club Resort</span>
          </p>
        </>
      ],
    },
    default: {
      title: [
        <>
        </>,
      ],
      body: [
        <>
        </>,
      ],
    },
  };

  // Destructure the title and body based on theme
  const { title, body } = copyByTheme[siteConfig.theme] || copyByTheme.default;

  return (
    <main className='_main'>
      <div className="_content">
      {title.map((paragraph, i) => (
          <div key={i}>
            {paragraph}
          </div>
        ))}
        {body.map((paragraph, i) => (
          <div key={i}>
            {paragraph}
          </div>
        ))}
      </div>
      <button className='cta' onClick={() => router.push('/entry')}>
        Enter Now
      </button>
    </main>
  );
}