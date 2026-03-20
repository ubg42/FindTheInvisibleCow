import React, { useEffect } from "react";

const FooterAd: React.FC = () => {
  useEffect(() => {
    (window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", height: "70px", width: "728px" }}
      data-ad-client="ca-pub-7708254463438007"
      data-ad-slot="7405679623"
    />
  );
};

export default FooterAd;

declare global {
  interface Window {
    adsbygoogle: {}[];
  }
}
