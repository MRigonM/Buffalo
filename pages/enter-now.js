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
      </div>

      <div className="bt-freixenet-home">
        <div key="freixenet-diamond-image">
          <Image
            src="/images/freixenet/diamond-header.png"
            width={370}
            height={250}
            quality={100}
            className="freixenet-diamond-image"
            alt="Freixenet Diamond Header"
          />
        </div>

        <video
          className="bt-freixenet-home-video"
          src="/videos/freixenet/bottle_animation.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", height: "auto" }}
        />

        <button
          className="submitButton"
          onClick={() => router.push("/entry")}
        >
          Enter now
        </button>
      </div>
    </main>
  );
}