import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <div className="lg:px-[10%] px-[5%] bg-[#0F172A]">
      <div className="navbar   ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52 text-red-400  "
            >
              <NavLink to="/dashboard">
                <li className="text-white">
                  <a>Dashboard </a>
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li className="text-white">
                  <a>Master </a>
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li className="text-white">
                  <a>Price </a>
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li className="text-white">
                  <a>Calendar </a>
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li className="text-white">
                  <a>Reports </a>
                </li>
              </NavLink>
            </ul>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <NavLink to="/dashboard">
                <li className="text-white">
                  <a>Dashboard </a>
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li className="text-white">
                  <a>Master </a>
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li className="text-white">
                  <a>Price </a>
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li className="text-white">
                  <a>Calendar </a>
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li className="text-white">
                  <a>Reports </a>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
