import { RiDashboardHorizontalLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex fixed z-50 right-0 left-0 justify-between items-center w-[90%] backdrop-blur-2xl backdrop-hue-rotate-60 backdrop-contrast-150 mx-auto bg-transparent">
      <div className="font-bold gap-2 flex items-center p-4 text-blue-800">
        <RiDashboardHorizontalLine className="text-4xl" />{" "}
        <span className="bg-clip-text font-extrabold leading-tighter tracking-tighter text-4xl text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          AlgoVisuals
        </span>
      </div>
      <ul className="flex justify-center gap-8 items-center font-medium uppercase text-slate-700 ">
        <li className="hover:text-blue-600">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-blue-600">
          <Link to="/algos">Algos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
