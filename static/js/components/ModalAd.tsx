import React, { useEffect } from "react";

const ModalAd: React.FC = () => {
  useEffect(() => {
    (window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ width: "300px", height: "250px" }}
      data-ad-client="ca-pub-7708254463438007"
      data-ad-slot="2580619829"
    />
  );
};

export default ModalAd;

declare global {
  interface Window {
    adsbygoogle: {}[];
  }
}
