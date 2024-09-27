import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import SideNav from "./SideNav";

function AppLayout() {
  return (
    <div>
      <Header />

      <div>
        <SideNav />

        <main>
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;
