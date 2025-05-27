import Image from "next/image";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import sites from "../config/sites";

export default function EnterNowPage() {
  const router = useRouter();
  const [siteConfig, setSiteConfig] = useState(sites.default);

  useEffect(() => {
    const hostname = window.location.hostname;
    const config = sites[hostname] || sites.default;
    setSiteConfig(config);

    // Dynamically set the body class (only on client)
    document.body.classList.remove(
      ...document.body.className
        .split(" ")
        .filter((cls) => cls.startsWith("theme-"))
    );
    document.body.classList.add(`theme-${config.theme}`);
  }, []);

  return (
    <main className="_main">
      <div className="_content">
        <Header theme={siteConfig.theme} showExtraImage={false} />

        <div className="bt-freixenet-entry-video-wrapper bt-freixenet-enter-now">
          <video
            className="bt-freixenet-entry-video"
            src="/videos/freixenet/bottle_animation.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%' }}
          />

          <div className="bt-freixenet-diamond-wrapper" key="freixenet-diamond-image">
            <Image
              src="/images/freixenet/diamond-header.png"
              width={370}
              height={250}
              quality={100}
              className="freixenet-diamond-image"
              alt="Freixenet Diamond Header"
            />
          </div>

          <button
            className="submitButton"
            onClick={() => router.push("/entry")}
          >
            Enter now
          </button>
        </div>
      </div>
    </main>
  );
}