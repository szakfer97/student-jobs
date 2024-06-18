import { NavLink } from "react-router-dom";

export default function NavBar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Jobs", path: "/jobs" },
    { name: "Reviews", path: "/reviews" },
    { name: "Shop", path: "/shop" },
    { name: "Settings", path: "/settings" },
  ];
  return (
    <nav className="bg-white text-purple-900 font-bold p-4 flex justify-between items-center">
      <div className="flex space-x-4">
        {navLinks.map(({ name, path }) => (
          <NavLink
            key={path}
            to={path}
            className="hover:text-yellow-500"
            style={({ isActive }) =>
              isActive
                ? {
                    fontWeight: "bold",
                    backgroundColor: "white",
                    color: "blue",
                  }
                : {}
            }
          >
            {name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
