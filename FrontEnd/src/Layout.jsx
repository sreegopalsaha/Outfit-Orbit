import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="w-full h-full relative">
      <Header />
      <main className="pt-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
