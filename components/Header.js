import Image from "next/image";
import React from "react";

const Header = ({ theme, showExtraImage = true }) => {
  const freixenet = {
    body: [
      <div key="freixenet-logo-wrapper" className="bt-freixenet-logo-wrapper">
        <h1 className="logo-image bt-logo">
          <span className="visuallyhidden">Freixenet</span>
        </h1>
      </div>,
      showExtraImage && (
        <div key="freixenet-diamond-image">
          <Image
            src="/images/freixenet/diamond-header.png"
            width={270}
            height={150}
            quality={100}
            className="freixenet-diamond-image"
            alt="Freixenet Diamond Header"
          />
        </div>
      ),
    ].filter(Boolean),
  };

  const sharedGolfCopy = {
    body: [
      <h1 key="golf-logo" className="logo-image bt-logo">
        <span className="visuallyhidden">Buffalo Trace</span>
      </h1>,
    ],
  };

  const COPY_BY_THEME = {
    "bt-golf-tesco": sharedGolfCopy,
    "bt-golf-supervalu-dunnes": sharedGolfCopy,
    "bt-golf-on-trade": sharedGolfCopy,
    "bt-rugby-off-trade": sharedGolfCopy,
    "bt-rugby-on-trade": sharedGolfCopy,
    "bt-freixenet": freixenet,
    XXXX: {
      body: [
        <div key="xxxx-1">XXXX</div>,
        <div key="xxxx-2">XXXX</div>,
      ],
    },
  };

  const { body } = COPY_BY_THEME[theme] || { body: [] };

  return <>{body}</>;
};

export default Header;