import { useEffect, useState, type JSX } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Navigate } from "react-router-dom";

export function RequireAdmin({
  children,
}: Readonly<{ children: JSX.Element }>) {
  const { keycloak, initialized } = useKeycloak();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!initialized) return;

    if (!keycloak.authenticated) {
      keycloak.login({
        redirectUri: globalThis.location.href,
      });
      return;
    }

    // Ensure token is valid
    keycloak
      .updateToken(30)
      .then(() => setReady(true))
      .catch(() => {
        keycloak.logout({
          redirectUri: globalThis.location.origin,
        });
      });
  }, [initialized, keycloak]);

  if (!initialized || !ready) return null; // spinner is fine

  const isAdmin = keycloak.hasRealmRole("ADMIN");

  if (!isAdmin) {
    return <Navigate to="/404" replace />;
  }

  return children;
}
