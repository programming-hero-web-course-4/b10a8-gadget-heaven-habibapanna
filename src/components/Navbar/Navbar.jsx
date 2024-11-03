import { NavLink } from "react-router-dom";


const Navbar = () => {

const links = <>
            <li className="text-white"><NavLink to="/">Home</NavLink></li>
            <li className="text-white"><a>Statistics</a></li>
            <li className="text-white"><a>Dashboard</a></li>

</>


    return (
        <div className="navbar bg-purple-500">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost  text-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-white text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {links}
          </ul>
        </div>
        <div className="navbar-end ">
          <a className=""><i className="p-2 text-gray-500 mr-2 rounded-full bg-white fa-solid fa-cart-shopping"></i></a>
          <i className="p-2 text-gray-500 rounded-full bg-white fa-regular fa-heart"></i>
        </div>
      </div>
    );
};

export default Navbar;