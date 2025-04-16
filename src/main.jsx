import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import store from "./store/index.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
  <Provider store={store}>
    <App />
  </Provider>
    </BrowserRouter>
  </StrictMode>
);
