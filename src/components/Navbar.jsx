// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useAuth } from "../hooks/useAuth"; // Firebase Auth Context Hook

const Navbar = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white p-6 shadow-lg max-w-[1400px] mt-2 mx-auto">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h2 className="font-bold text-xl">WarmPaws</h2>

        {/* Hamburger icon (mobile) */}
        <button
          className="md:hidden block text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 absolute md:static bg-blue-600 md:bg-transparent left-0 top-16 md:top-auto w-full md:w-auto text-center md:text-left z-10`}
        >
          <Link
            to="/"
            className="block font-bold py-2 md:py-0 hover:underline border-b md:border-none"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="block font-bold py-2 md:py-0 hover:underline border-b md:border-none"
          >
            Services
          </Link>
          <Link
            to="/profile"
            className="block font-bold py-2 md:py-0 hover:underline border-b md:border-none"
          >
            My Profile
          </Link>

          {/* Auth Buttons */}
          <div className="py-2 md:py-0">
            {user ? (
              <div className="flex justify-center md:justify-start items-center space-x-3">
                <img
                  src={user.photoURL || "https://i.pravatar.cc/40"}
                  alt="User Avatar"
                  className="rounded-full w-8 h-8 border-2 border-white"
                  title={user.displayName || "User"}
                />
                <button
                  onClick={logout}
                  className="bg-red-500 px-3 py-1 rounded font-bold"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row items-center md:space-x-2 space-y-2 md:space-y-0">
                <Link
                  to="/login"
                  className="bg-green-500 px-3 py-1 rounded font-bold"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-yellow-500 px-3 py-1 rounded font-bold"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
