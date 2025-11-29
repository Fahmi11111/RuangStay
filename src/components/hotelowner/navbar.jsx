import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-3 md:px-7 border-b border-gray-400 py-3 bg-white trasnition-all duration-300">
      <Link to="/">
        <img src={assets.logo} className="h-9 invert opacity-90" />
      </Link>
      <UserButton />
    </div>
  );
};

export default Navbar;
