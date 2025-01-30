import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [show,setShow]=useState(false)
  const handleButtonToggle=()=>{
    return setShow(!show)
  }
  return (
    <header className="w-screen h-9 bg-zinc-600">
      <div className="max-w-[80rem] m-auto">
        <div className="grid grid-cols-[0.5fr_1fr] items-center justify-center px-12 m-auto h-9">
          <div>
            <NavLink to="/">
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>
          <nav>
            <ul className="flex justify-end items-center gap-12">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/country">Country</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>

          <div>
            <button onClick={handleButtonToggle}><GiHamburgerMenu/></button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
