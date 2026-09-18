


import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

function MainLayout() {
  return (


      <div className="w-full min-h-screen overflow-x-hidden">


        

        <Navbar />

        <hr className="border-slate-800" />

        <main>
          <Outlet />
        </main>

        <Footer />

      </div>

    
  );
}

export default MainLayout;

