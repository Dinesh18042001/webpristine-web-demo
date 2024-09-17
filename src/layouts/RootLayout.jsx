import { NavLink, Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

export default function RootLayout() {
  return (
    <div className='root-layout'>
      <nav>
        <Header/>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
