import React, { useContext } from "react";
import "./searchfilter.css";
import search from "../assets/search.svg";
import { DarkContext } from "../context/darkmodeContext";
export const SearchFilter = ({ setsearchTyped, setSelectedRegion }) => {
  const { dark, setDark } = useContext(DarkContext);
  return (
    <div className={dark && "dark"}>
      <div className="search_filter  py-6 md:py-8">
        <div className="searchbar relative">
          <img src={search} alt="" className="light-image" />
          <input
            type="text"
            placeholder="Search for a country"
            onChange={(e) => setsearchTyped(e.target.value)}
          />
        </div>
        <div className="filterbar custom-select">
          <select
            name="region custom-select"
            id=""
            className="region dark:bg-dark-300 dark:text-white"
            onChange={(e) => setSelectedRegion(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </div>
  );
};
