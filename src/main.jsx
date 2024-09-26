import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak.js";

createRoot(document.getElementById("root")).render(
  <ReactKeycloakProvider
    authClient={keycloak}
    initOptions={{ onLoad: "login-required" }}
  >
    <App />
  </ReactKeycloakProvider>
);
