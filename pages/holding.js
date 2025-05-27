// pages/holding.js

import Header from "../components/Header";

export default function HoldingPage({ siteConfig }) {
  const start = new Date(siteConfig.startDate); // Correct: use startDate from config

  const formatDate = (dateInput) => {
    const date = new Date(dateInput);
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yy = String(date.getFullYear()).slice(-2);
    return `${dd}.${mm}.${yy}`;
  };

  const sharedBtFreixenetCopy = {
    title: <><span className="text-center bt-freixenet-holding-header">Sorry, you’re a little <br/> early, this promotion <br/> isn’t open just yet</span></>,
    body: [
        <>
          Please come back <br/> and enter after <br/> <b>30th November 2025.</b>
        </>,
    ],
    extraContent: [
      <>
        <video
          className="bt-freixenet-entry-video"
          src="/videos/freixenet/bg_animation.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/freixenet/age-background-confirm.png"
          style={{ width: '100%' }}
        />
      </>
    ]
  };

  const copyByTheme = {
    'bt-freixenet': sharedBtFreixenetCopy,
    'XXX': {
      title: '',
      extraContent: [
        <></>
      ]
    },
  };

  const { title, body, extraContent } = copyByTheme[siteConfig.theme];

  return (
      <main className='_main'>
        <div>
          <div className="_content">
            <Header theme={siteConfig.theme}/>
            {extraContent}
            <h2 className="headline typography-headline-elevated typeface-secondary margin-bottom">{title}</h2>
            {body.map((paragraph, i) => (
              <p className="text-center" key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </main>
  );
}