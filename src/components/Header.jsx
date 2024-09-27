import { useKeycloak } from "@react-keycloak/web";

function Header() {
  const { keycloak } = useKeycloak();

  return (
    <header>
      <div>
        <p>Přihlášený uživatel:</p>

        <p>{keycloak.tokenParsed.email}</p>
      </div>

      <div
        onClick={() =>
          keycloak.logout({ redirectUri: "http://localhost:5173" })
        }
      >
        <p>Odhlásit</p>
      </div>
    </header>
  );
}

export default Header;
