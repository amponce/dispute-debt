import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import {
  applyPolyfills,
  defineCustomElements,
} from "@department-of-veterans-affairs/component-library";

import App from "./App";

applyPolyfills().then(() => {
  defineCustomElements();
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
