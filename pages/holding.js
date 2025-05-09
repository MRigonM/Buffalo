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
      <h1 className="logo-image bt-logo">
        <span className="visuallyhidden">Buffalo Trace</span>
      </h1>

      <p className="headline typography-headline typeface-secondary text-center">
        We’re not quite open yet,<br />
        check back in on<br />
        <strong className="date">{formatDate(start)}</strong>
      </p>
    </div>
    </div>
    </main>
  );
}