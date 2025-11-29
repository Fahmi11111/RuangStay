import { Outlet } from "react-router-dom";
import Navbar from "../../components/hotelowner/navbar";
import Sidebar from "../../components/hotelowner/sidebar";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Wrapper Sidebar + Konten */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Konten halaman */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 pt-16">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
