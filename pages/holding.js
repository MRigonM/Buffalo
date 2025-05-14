// pages/holding.js

export default function HoldingPage({ siteConfig }) {
  const start = new Date(siteConfig.startDate); // Correct: use startDate from config

  const formatDate = (dateInput) => {
    const date = new Date(dateInput);
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yy = String(date.getFullYear()).slice(-2);
    return `${dd}.${mm}.${yy}`;
  };

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
      <p className="headline typography-headline typeface-secondary text-center typography-body-text mb-2">
        Sorry, you’re a little early, this promotion isn’t open just yet
      </p>
      <p className="text-center typography-body-text">Please come back
        <br/> and enter after
        <br/>xx/xx/xxxx.</p>
    </div>
    </div>
    </main>
  );
}