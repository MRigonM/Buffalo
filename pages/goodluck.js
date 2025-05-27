import Image from 'next/image';
import Header from '../components/Header';
export default function GoodLuck({ siteConfig }) {
  const sharedBtGolfCopy = {
    title: 'Thank you for entering',
    body: [
      <>
      <p className="text-center">If you’re a lucky winner we’ll reach out to the email address you provided, so please keep a look out in your inbox.</p>
      <h3 className="subhead text-center">Meanwhile, why not try a Buffalo & Ginger Ale?</h3>
      <div className="recipe"><p><strong>50ml</strong> Buffalo Trace Topped with ginger ale Garnish with a wedge of lime</p></div>
      </>
    ],
    extraContent: [
      <></>,
    ],
  };

  const sharedBtRugbyCopy = {
    title: 'Thank you for entering',
    body: [
      <>
      <p className="text-center">If you’re a lucky winner we’ll reach out to the email address you provided on
Tuesday 3rd June 2025
so please keep a look out in your inbox</p>
<div className="section-receipe">
  <div className="_content">
      <h3 className="subhead">Meanwhile, why not try a Buffalo & Ginger Ale?</h3>
      <div className="row">
      <Image 
        src="/images/BT-GingerAle-Recipe.png" 
        width={98} 
        height={171} 
        className="recipe-image" 
        alt="Buffalo & Ginger Ale Recipe" 
      />
      <div className="recipe"><p><strong>50ml</strong> Buffalo Trace Topped with ginger ale Garnish with a wedge of lime</p></div>
      </div>
     </div>
     </div>
      </>
    ],
    extraContent: [
      <></>,
    ],
  };

  const sharedBtFreixenetCopy = {
    title: <><span className="text-center bt-freixenet-closed-header">Thank you for entering good luck</span></>,
    body: [
      <>
        <div className="page-goodluck-last">
          <p className="text-center">
            We will be drawing a winner on <br/> <b>30th November 2025.</b>
          </p>
          <p className="page-goodluck-last-p text-center">
            Please keep an eye on your <br/> email inbox to see if you&apos;re <br/>  one of our lucky winners!
          </p>
        </div>
      </>
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
      </>,
    ],
  };

  const copyByTheme = {
    'bt-golf-on-trade': sharedBtGolfCopy,
    'bt-golf-supervalu-dunnes': sharedBtGolfCopy,
    'bt-golf-tesco': sharedBtGolfCopy,
    'bt-rugby-off-trade': sharedBtRugbyCopy,
    'bt-rugby-on-trade': sharedBtRugbyCopy,
    'bt-freixenet': sharedBtFreixenetCopy,
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
      extraContent: [
        <></>,
      ],
    },
  };

  const { title, body, extraContent } = copyByTheme[siteConfig.theme] || copyByTheme.default;

  return (
    <main className='_main'>
      <div className="_content">
        <Header theme={siteConfig.theme} />
         
        {extraContent}
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