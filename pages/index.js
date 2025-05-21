import { useRouter } from 'next/router';

export default function Home({ siteConfig }) {
  const router = useRouter();

  // Shared text for all themes
  const sharedByFreixenetCopy = {
    title: [
      <>
      </>
    ],
    body: [
      <>
        <div className='bt-freixenet-index'>
          <video
            className="bt-freixenet-entry-video-index"
            src="/videos/freixenet/logo_animation.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%' }}
          />
        </div>
      </>
    ],
    continueRouter: '/verify-age',
  };

  // Mapping themes to their respective content
  const copyByTheme = {
    'bt-freixenet': sharedByFreixenetCopy,
    default: {
      title: [
        <>
        </>,
      ],
      body: [
        <>
        </>,
      ],
      continueRouter: '/entry',
    },
  };

  // Destructure the title and body based on theme
  const { title, body, continueRouter } = copyByTheme[siteConfig.theme] || copyByTheme.default;

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
      <button className='cta' onClick={() => router.push(continueRouter)}>
        Continue
      </button>
    </main>
  );
}