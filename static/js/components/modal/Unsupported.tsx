import React from "react";
import BrowserSupport from "../BrowserSupport";
import Modal from "./Modal";
import { useT } from "../../context/i18n";

const Unsupported: React.FC = () => {
  const t = useT();

  return (
    <Modal>
      {" "}
      <h1>{t("support.webExperiment")}</h1>
      <p>{t("support.sorry")}</p>
      <BrowserSupport supported={false} />
    </Modal>
  );
};

export default Unsupported;
