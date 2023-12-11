import { Outlet } from "react-router-dom";
// import Home from "../pages/Home";
import Header from "./Header";

function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
