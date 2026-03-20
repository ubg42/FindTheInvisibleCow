import React, { useEffect, useState } from "react";
import FooterAd from "./FooterAd";
import { useFticState } from "../context/ftic";
import { Page } from "../lib/FindTheInvisibleCow";

const FooterAdRotator: React.FC = () => {
  const state = useFticState();

  const [key, setKey] = useState(0);

  useEffect(() => {
    if (state.game.page === Page.Congratulations) {
      setKey((k) => k + 1);
    }
  }, [state.game.page]);

  return <FooterAd key={key} />;
};

export default FooterAdRotator;
