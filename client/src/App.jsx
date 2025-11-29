import Navbar from "./components/navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./components/footer";
import AllRooms from "./pages/allrooms";
import RoomDetails from "./pages/roomdetails";
import MyBookings from "./pages/mybookings";
import HotelReg from "./components/hotelreg";

// OWNER PAGES
import Layout from "./pages/hotelowner/layout";
import Dashboard from "./pages/hotelowner/dashboard";
import AddRoom from "./pages/hotelowner/addroom";
import ListRoom from "./pages/hotelowner/listroom";

const App = () => {
  const location = useLocation();
  const isOwnerPath = location.pathname.startsWith("/owner");

  return (
    <div>
      {/* Navbar & Footer hilang khusus halaman owner */}
      {!isOwnerPath && <Navbar />}

      {/* Tidak dipakai (HotelReg) */}
      {/* <HotelReg /> */}

      <div className="min-h-[70vh]">
        <Routes>
          {/* USER ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />

          {/* OWNER ROUTES */}
          <Route path="/owner" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="list-room" element={<ListRoom />} />
          </Route>
        </Routes>
      </div>

      {!isOwnerPath && <Footer />}
    </div>
  );
};

export default App;
