import {
  ArrowRightStartOnRectangleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useKeycloak } from "@react-keycloak/web";

function Header() {
  const { keycloak } = useKeycloak();

  return (
    <header className="flex h-14 items-center justify-end gap-10 border-b-2">
      <div className="flex gap-2">
        <UserCircleIcon className="aspect-square h-6" />

        <p>{keycloak.tokenParsed.email}</p>
      </div>

      <div
        className="mr-5 flex cursor-pointer gap-2 transition-all hover:text-slate-900"
        onClick={() =>
          keycloak.logout({ redirectUri: "http://localhost:5173" })
        }
      >
        <p>Odhlásit</p>
        <ArrowRightStartOnRectangleIcon className="aspect-square h-6" />
      </div>
    </header>
  );
}

export default Header;
