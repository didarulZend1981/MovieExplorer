


import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        

        <Navbar />

        <hr className="border-slate-800" />

        <main>
          <Outlet />
        </main>

        <Footer />

      </div>

    </div>
  );
}

export default MainLayout;

