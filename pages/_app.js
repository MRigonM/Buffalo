import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import AgeGate from '../components/AgeGate';
import HoldingPage from './holding';
import ClosedPage from './closed';
import Footer from '../components/Footer';
import sites from '../config/sites';
import '../styles/main.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [siteConfig, setSiteConfig] = useState(null);
  const [status, setStatus] = useState('loading');
  const [ageConfirmed, setAgeConfirmed] = useState(false);

  const isTermsPage = router.pathname === '/terms';

  useEffect(() => {
    const host = window.location.hostname;
    const config = sites[host] || sites.default;
    setSiteConfig(config);

    const now = new Date();
    const calculatedStatus =
      now < new Date(config.startDate) ? 'holding' :
      now > new Date(config.endDate) ? 'closed' : 'live';

    setStatus(calculatedStatus);

    if (localStorage.getItem('ageConfirmed') === 'true') {
      setAgeConfirmed(true);
    }

    if (config.theme) {
      document.body.classList.add(`theme-${config.theme}`);
    }

    const handleRouteChange = (url) => {
      const config = sites[window.location.hostname] || sites.default;
    
      // Remove all existing page-* and theme-* classes
      document.body.classList.remove(
        ...Array.from(document.body.classList).filter(cls =>
          cls.startsWith('page-') || cls.startsWith('theme-')
        )
      );
    
      // Re-apply theme
      if (config.theme) {
        document.body.classList.add(`theme-${config.theme}`);
      }
    
      const targetPath = url.split('?')[0]; // Strip query params
      const isNavigatingToTerms = targetPath === '/terms';
    
      if (isNavigatingToTerms) {
        document.body.classList.add('page-terms');
      } else if (status === 'holding') {
        document.body.classList.add('page-holding');
      } else if (status === 'closed') {
        document.body.classList.add('page-closed');
      } else if (status === 'live') {
        const slug = targetPath === '/' ? 'home' : targetPath.slice(1).replace(/\//g, '-');
        document.body.classList.add(`page-${slug}`);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router, status]);

  useEffect(() => {
    if (!siteConfig || status === 'loading') return;

    document.body.classList.remove(
      ...Array.from(document.body.classList).filter(cls =>
        cls.startsWith('page-')
      )
    );

    if (isTermsPage) {
      document.body.classList.add('page-terms');
    } else if (status === 'holding') {
      document.body.classList.add('page-holding');
    } else if (status === 'closed') {
      document.body.classList.add('page-closed');
    } else if (status === 'live') {
      const slug = router.pathname === '/' ? 'home' : router.pathname.slice(1).replace(/\//g, '-');
      document.body.classList.add(`page-${slug}`);
    }
  }, [router.pathname, siteConfig, status, isTermsPage]);

  if (!siteConfig) return null;

  return (
    <>
      <Head>
        <title>Buffalo Trace</title>
      </Head>

      <div className="_container">
        {/* Always render content, regardless of age */}
        {isTermsPage && (
          <>
            <Component {...pageProps} siteConfig={siteConfig} />
            <Footer siteConfig={siteConfig} />
          </>
        )}

        {!isTermsPage && status === 'holding' && (
          <>
            <HoldingPage siteConfig={siteConfig} />
            <Footer siteConfig={siteConfig} />
          </>
        )}

        {!isTermsPage && status === 'closed' && (
          <>
            <ClosedPage siteConfig={siteConfig} />
            <Footer siteConfig={siteConfig} />
          </>
        )}

        {!isTermsPage && status === 'live' && (
          <>
            <Component {...pageProps} siteConfig={siteConfig} />
            <Footer siteConfig={siteConfig} />
          </>
        )}
      </div>

      {/* Overlay AgeGate on top of everything, including /terms */}
      {!ageConfirmed && (
        <AgeGate
          onAgeConfirmed={() => {
            localStorage.setItem('ageConfirmed', 'true');
            setAgeConfirmed(true);
          }}
        />
      )}
    </>
  );
}

export default MyApp;