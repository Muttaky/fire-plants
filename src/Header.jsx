import React, { use } from "react";
import { Link, NavLink } from "react-router"; // Ensure import is from 'react-router-dom'
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";

const Header = () => {
  let { user, logOut } = use(AuthContext);

  // Check if use is available (React 18's use hook)
  if (!user && !logOut) {
    // Fallback for context consumption if use() is not fully configured
    // Consider using useContext(AuthContext) instead of use(AuthContext) for broader compatibility
  }

  let handleLogOut = () => {
    logOut()
      .then(() => {
        toast("Logged Out successfully");
      })
      .catch((error) => {
        toast.warning(error.message);
      });
  };

  // Consolidated navigation links array (minimum 5 routes satisfied)
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/plants"}>All Items</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About Us</NavLink>
      </li>

      {/* Conditional Routing: Show Profile only if logged in */}
      {user ? (
        <>
          <li>
            <NavLink to={"/profile"}>My Profile</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </>
      ) : (
        <>
          {/* Login/Register buttons are shown in navbar-end for non-logged-in users */}
        </>
      )}
    </>
  );

  return (
    // STICKY POSITION AND BACKGROUND COLOR
    <div className="bg-primary shadow-md sticky top-0 z-50">
      {/* SIDE MARGINS FOR NAVBAR CONTENT */}
      <div className="navbar max-w-7xl mx-auto px-8">
        <div className="navbar-start">
          {/* Mobile Dropdown Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {/* SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
              {/* Add Login/Register to mobile if not logged in */}
              {!user && (
                <>
                  <li>
                    <NavLink to={"/login"}>Login</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/register"}>Register</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* LOGO */}
          <Link className="btn text-xl sm:text-3xl text-primary">
            <img
              className="hidden sm:block w-8 h-8 mr-2"
              src="/logo.png"
              alt="GreenNest Logo"
            />
            GreenNest
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{navLinks}</ul>
        </div>

        {/* Auth Buttons / Profile */}
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    src={user.photoURL || "default-avatar.png"}
                    alt="User Avatar"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content bg-base-200 rounded-box z-[1] w-52 mt-4 p-2 shadow-sm"
              >
                <li>
                  <Link to="/profile">{user.displayName || "Profile"}</Link>
                </li>
                <li>
                  <a onClick={handleLogOut}>Log out</a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center">
              <Link to="/login" className="btn btn-secondary text-primary mr-2">
                Log in
              </Link>
              <Link
                to="/register"
                className="btn btn-secondary text-primary hidden md:flex"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
