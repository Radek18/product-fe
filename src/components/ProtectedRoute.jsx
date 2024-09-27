import { useKeycloak } from "@react-keycloak/web";

function ProtectedRoute({ children }) {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) return <p>Loading...</p>;

  if (!keycloak.authenticated) return <p>Authenticating...</p>;

  return children;
}

export default ProtectedRoute;
