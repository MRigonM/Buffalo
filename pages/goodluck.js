import Image from 'next/image';
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
          <span className="visuallyhidden">Buffalo Trace</span>
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