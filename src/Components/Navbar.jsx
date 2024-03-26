import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              className={({ isActive }) =>
              isActive ? "text-green-600 rounded-xl flex  items-center p-2 font-extrabold border-2 border-green-600" : "p-2 text-lg"} to="/"
            >
              Home
            </NavLink>
            <NavLink  className={({ isActive }) =>
              isActive ? "text-green-600 rounded-xl flex  items-center p-2 font-extrabold border-2 border-green-600" : "p-2 text-lg"} to="/listedBooks" >Listed Books</NavLink>
            <NavLink className={({ isActive }) =>
              isActive ? "text-green-600 rounded-xl flex  items-center p-2 font-extrabold border-2 border-green-600" : "p-2 text-lg"} to="/pagesToRead">Pages To Read</NavLink>
            <NavLink className={({ isActive }) =>
              isActive ? "text-green-600 rounded-xl flex  items-center p-2 font-extrabold border-2 border-green-600" : "p-2 text-lg"} to="/recommendations">Recommendations</NavLink>
            <NavLink className={({ isActive }) =>
              isActive ? "text-green-600 rounded-xl flex  items-center p-2 font-extrabold border-2 border-green-600" : "p-2 text-lg"} to="/contact">Contact Us</NavLink>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text bold text-2xl">
          Book Vibe
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex  gap-3 px-1">
            <NavLink
              className={({ isActive, }) =>
              isActive ? "text-green-600 rounded-xl flex justify-center items-center p-2 font-extrabold border-2 border-green-600" : "p-2 text-lg"} to="/"
            >
              Home
            </NavLink>
            <NavLink  className={({ isActive }) =>
              isActive ? "text-green-600 font-extrabold rounded-xl flex justify-center items-center p-2 border-2 border-green-600" : "p-2 text-lg"} to="/listedBooks" >Listed Books</NavLink>
            <NavLink className={({ isActive }) =>
              isActive ? "text-green-600 font-extrabold rounded-xl flex justify-center items-center p-2 border-2 border-green-600" : "p-2 text-lg"} to="/pagesToRead">Pages To Read</NavLink>
            <NavLink className={({ isActive }) =>
              isActive ? "text-green-600 font-extrabold rounded-xl flex justify-center items-center p-2 border-2 border-green-600" : "p-2 text-lg"} to="/recommendations">Recommendations</NavLink>
            <NavLink className={({ isActive }) =>
              isActive ? "text-green-600 font-extrabold rounded-xl flex justify-center items-center p-2 border-2 border-green-600" : "p-2 text-lg"} to="/contact">Contact Us</NavLink>
        </ul>
      </div>
      <div className="navbar-end flex gap-3">
        <a className="btn bg-[#23BE0A] text-white">Sign In</a>
        <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
