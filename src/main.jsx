import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { ReExtProvider } from "@sencha/reext";

const ReExtData = {
  sdkversion: "7.9.0",
  toolkit: "classic",
  theme: "material",
  rtl: false,
  locale: "en",
  debug: false,
  location: "remote",
};

const reactroot = createRoot(document.getElementById("root"));

reactroot.render(
  <StrictMode>
    <ReExtProvider
      ReExtData={ReExtData}
      reextkey="Y2lnSFZuRjZQaWt6NXN0WnJnSW1oT0hJeXNDQUN2WTRnMjZycHdRWXd2Si45aHpOMGNUTjRrRE4zRWpPaUFIZWxKQ0xpSW1laEZEZWhCVGNpWmphMnNHYXJCRE4yRm5OcWhqZHFGRE1mUldhc0ppT2lJV2R6SnllLjlKaU4xSXpVSUppT2ljR2JoSnll"
    >
      <App />
    </ReExtProvider>
  </StrictMode>
);
