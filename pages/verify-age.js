import Header from "../components/Header";
import { useRouter } from 'next/router';
import AgeGate from "../components/AgeGate";

export default function VerifyAgePage({ siteConfig }) {
  const router = useRouter();
  return (
    <main className='_main'>
      <div className="_content">
       <Header theme={siteConfig.theme} showExtraImage={false} />
      </div>
      <div className="age-content">
        <AgeGate
          modal={false}
          onAgeConfirmed={() => {
            localStorage.setItem('ageConfirmed', 'true');
            router.push('/enter-now');
          }}
        />
      </div>
    </main>
  );
}