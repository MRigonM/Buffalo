// pages/closed.js

import Image from "next/image";
import Header from "../components/Header";

export default function ClosedPage({ siteConfig }) {

  const sharedBtGolfCopy = {
    title: 'Now Closed',
    body: [
      <>Unfortunately the competition is now closed. Head to our social channels to keep up to date with future promotions.</>,
    ],
    extraContent: [
      <></>,
    ],
  };

  const sharedBtRugbyCopy = {
    title: 'Now Closed',
    body: [
      <>Thank you for your entry, unfortunately the competition is now closed.</>,
    ],
    extraContent: [
      <></>,
    ],
  };

  const sharedBtFreixenetCopy = {
    title: <><span className="text-center bt-freixenet-closed-header">Unfortunately <br/> this promotion <br/> is now closed</span></>,
    body: [
      <>
        <p>
          In the meantime, have a <br/> scroll on our socials for <br/> more Freixenet content!
        </p>

        <div className="bt-freixenet-closed-socials">
          <Image 
            src="/images/freixenet/facebook.png" 
            width={52} 
            height={52}
            className="facebook-icon" 
            alt="Facebook Icon"
          /> 
          <Image 
            src="/images/freixenet/instagram.png" 
            width={52} 
            height={52}
            className="instagram-icon" 
            alt="Instagram Icon"
          /> 
        </div>
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
          poster="/images/freixenet/diamond-background.png"
          style={{ width: '100%' }}
        />
      </>
    ]
  };

  const copyByTheme = {
    'bt-golf-on-trade': sharedBtGolfCopy,
    'bt-golf-supervalu-dunnes': sharedBtGolfCopy,
    'bt-golf-tesco': sharedBtGolfCopy,
    'bt-rugby-off-trade': sharedBtRugbyCopy,
    'bt-rugby-on-trade': sharedBtRugbyCopy,
    'bt-freixenet': sharedBtFreixenetCopy,
    'XXX': {
      title: '',
      body: [
        <></>,
        <></>,
      ],
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
          <Header theme={siteConfig.theme} />
          
          {extraContent}
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


