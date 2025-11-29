import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const sidebarLinks = [
    { name: "Dashboard", path: "/owner", icon: assets.dashboardIcon },
    { name: "Add room", path: "/owner/add-room", icon: assets.addIcon },
    { name: "List room", path: "/owner/list-room", icon: assets.listIcon },
  ];

  return (
    <div className="md:w-64 w-16 border-r h-full border-gray-300 pt-3 flex flex-col transition-all duration-300 bg-white">
      {sidebarLinks.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) =>
            `
              flex items-center gap-3 py-3 px-4 md:px-8 cursor-pointer
              transition-all duration-200
              ${
                isActive
                  ? "border-r-[4px] border-gray-300 bg-gray-200 text-black font-semibold"
                  : "hover:bg-gray-100 text-gray-700"
              }
            `
          }
        >
          <img src={item.icon} alt={item.name} className="w-6 h-6" />

          {/* Label hanya muncul di layar md ke atas */}
          <span className="hidden md:inline">{item.name}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
