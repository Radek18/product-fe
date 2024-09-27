import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import SideNav from "./SideNav";

function AppLayout() {
  return (
    <div className="flex h-screen flex-col text-slate-700">
      <Header />

      <div className="flex flex-1 overflow-y-auto">
        <SideNav />

        <main className="flex-1">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;
