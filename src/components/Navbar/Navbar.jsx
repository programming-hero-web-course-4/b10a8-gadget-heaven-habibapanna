import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {

  const location = useLocation();
  const isHomePage = location.pathname === '/';

const links = <>
            <li className=""><NavLink to="/" className={`${isHomePage ? 'text-white' : 'text-purple-500'}`}>Home</NavLink></li>
            <li className=""><NavLink to="/statistics" className={`${isHomePage ? 'text-white' : 'text-purple-500'}`}>Statistics</NavLink></li>
            <li className=""><NavLink to="/dashboard" className={`${isHomePage ? 'text-white' : 'text-purple-500'}`}>Dashboard</NavLink></li>
            <li><NavLink to="popular" className={`${isHomePage ? 'text-white' : 'text-purple-500'}`}>Popular</NavLink></li>

</>


    return (

       <div>
        <nav className={`${isHomePage ? 'bg-purple-500' : 'bg-white'}`}>
        <div className=" rounded-t-xl">
         <div className="navbar">
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
          <a className={`${isHomePage ? 'text-white font-bold text-xl' : 'text-purple-500 font-bold'}`}>Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="text-white menu menu-horizontal px-1">
          {links}
          </ul>
        </div>
        <div className="navbar-end ">
          <i className="p-2 text-gray-500 mr-2 rounded-full bg-white fa-solid fa-cart-shopping"></i>
          
          
          <i className="p-2 text-gray-500 rounded-full bg-white fa-regular fa-heart"></i>
          
        </div>
        
      </div>
         </div>
        </nav>
       </div>
        
    );
};

export default Navbar;