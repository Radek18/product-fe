import { createRoot } from "react-dom/client";
import keycloak from "./keycloak.js";
import App from "./App.jsx";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <ReactKeycloakProvider
    authClient={keycloak}
    initOptions={{ onLoad: "login-required" }}
  >
    <App />
  </ReactKeycloakProvider>
);
