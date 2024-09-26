import { useKeycloak } from "@react-keycloak/web";

function App() {
  const { keycloak } = useKeycloak();

  return (
    <div>
      <p>App</p>
      <button onClick={() => keycloak.logout()}>Odhlásit</button>
    </div>
  );
}

export default App;
