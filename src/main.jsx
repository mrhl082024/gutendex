import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ContextWindow } from "./components/ContextWindow.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextWindow>
      <App />
    </ContextWindow>
  </StrictMode>
);
