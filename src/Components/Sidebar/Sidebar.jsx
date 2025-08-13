import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import Style from "./Sidebar.module.css"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <i  onClick={() => setIsOpen(true)} className={`fa-solid fa-bars pt-10 pl-10 fa-2x text-amber-500 cursor-pointer absolute top-0 left-0 ${Style.hide}`}></i>
      <aside style={{left: isOpen ? '0' : '-100%'}} className={`bg-white px-5 w-[250px] h-screen fixed top-0 sm:left-0 transition-all duration-300 z-40 text-right`}>
        <i onClick={() => setIsOpen(false)} className={`fa-solid fa-xmark pt-5 text-2xl text-amber-500 sm:hidden cursor-pointer ${Style.hide}`}></i>
        <img className="w-full" src={Logo} alt="" />
        <ul className="text-left">
          <li>
            <Link
              className="bg-amber-500 w-full py-2 px-4 text-white rounded-xl font-bold text-xl block shadow-orange-200 shadow-lg transition-all duration-300 hover:shadow-none hover:scale-105 my-4"
              to="/"
            >
              <i className="fa-solid fa-utensils mr-2"></i>Meals
            </Link>
          </li>

          <li>
            <Link
              className="w-full py-2 px-4 text-black border border-neutral-300 rounded-xl text-xl block transition-all duration-300 hover:shadow-none hover:scale-105 my-4"
              to="/"
            >
              <i className="fa-solid fa-utensils mr-2"></i>Ingredients
            </Link>
          </li>

          <li>
            <Link
              className="w-full py-2 px-4 text-black border border-neutral-300 rounded-xl text-xl block transition-all duration-300 hover:shadow-none hover:scale-105 my-4"
              to="/"
            >
              <i className="fa-solid fa-utensils mr-2"></i>Area
            </Link>
          </li>
        </ul>

      </aside>
      <div style={{display: isOpen ? 'block' : 'none'}} className={`absolute top-0 left-0 w-full h-full bg-black/50 z-30 ${Style.hide}`}>
      </div>
    </>
  );
};

export default Sidebar;
