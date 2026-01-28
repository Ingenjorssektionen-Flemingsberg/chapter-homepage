import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { ThemeProvider } from "./contexts/ThemeProvider.tsx";
import keycloak from "./keycloak";
import { ReactKeycloakProvider } from "@react-keycloak/web";

import type {
  AuthClientEvent,
  AuthClientError,
  AuthClientTokens,
} from "@react-keycloak/core";
import { AuthProvider } from "./contexts/AuthContext.tsx";

const eventLogger = (event: AuthClientEvent, error?: AuthClientError) => {
  console.log("Keycloak Event:", event, error);
};

const tokenLogger = (tokens: AuthClientTokens) => {
  console.log("Keycloak Tokens:", tokens);
};

createRoot(document.getElementById("root")!).render(
  <ReactKeycloakProvider
    authClient={keycloak}
    initOptions={{
      checkLoginIframe: false, // Disable the login iframe
      onLoad: "check-sso", // Ensure the user is always redirected to the login page
      pkceMethod: "S256", // Enable PKCE if needed
    }}
    onEvent={eventLogger}
    onTokens={tokenLogger}
  >
    <StrictMode>
      <ThemeProvider>
        <BrowserRouter>
          <AuthProvider>
            <App />
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  </ReactKeycloakProvider>,
);
