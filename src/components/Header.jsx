import React, { useContext, useState } from "react";
import "./header.css";
import moon from "../assets/moon.svg";
import light from "../assets/light.svg";
import { DarkContext } from "../context/darkmodeContext";
import { Link } from "react-router-dom";
const Header = () => {
  const { dark, setDark } = useContext(DarkContext);
  return (
    <div className={dark && "dark"}>
      <header className="dark:bg-dark-300">
        <div className="container">
          <Link to="/">
            <h2 className="font-bold text-[19px] md:text-[24px] dark:text-white cursor-pointer">
              Where in the World?
            </h2>
          </Link>
          <div
            className="darkmode flex items-center gap-1 cursor-pointer dark:bg-[#344250] dark:hover:bg-[#3f505f] py-2 px-4 rounded-md transition-all duration-100"
            onClick={() => setDark(!dark)}
          >
            {dark ? (
              <img src={light} alt="" className="w-[22px] light-image" />
            ) : (
              <img src={moon} className="-rotate-[30deg] w-[22px] " />
            )}
            <h3 className="text-[16px] dark:text-white">
              {dark ? "Light" : "Dark"} Mode
            </h3>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
