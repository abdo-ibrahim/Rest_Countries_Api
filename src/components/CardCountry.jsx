import React, { useContext, useEffect, useState } from "react";
import { DarkContext } from "../context/darkmodeContext";
import "./cardcountry.css";
import { Link } from "react-router-dom";
const CardCountry = ({ country }) => {
  const { dark, setDark } = useContext(DarkContext);
  const numberFormatter = new Intl.NumberFormat("en-US");
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link to={`/${country.name.common}`}>
      <div className={dark && "dark"}>
        <div
          className={`country-card bg-white w-[250px] rounded-md overflow-hidden shadow-md dark:bg-dark-300 dark:text-white cursor-pointer ${
            isHovered ? "hovered" : ""
          }`}
          onMouseEnter={() => setIsHovered(!isHovered)}
          onMouseLeave={() => setIsHovered(!isHovered)}
        >
          <img
            src={country.flags.png}
            alt=""
            className="w-full h-[145px] object-fit shadow-sm"
          />
          <div className="info p-[20px]">
            <h3 className="mb-1 font-bold dark:text-white">
              {country.name.common}
            </h3>
            <p className="mb-1 font-semibold dark:text-white">
              Population:{" "}
              <span className="font-normal text-gray-500 dark:text-white">
                {numberFormatter.format(country.population)}
              </span>
            </p>
            <p className="mb-1 font-semibold dark:text-white">
              Region:{" "}
              <span className="font-normal text-gray-500 dark:text-white">
                {country.region}
              </span>
            </p>
            <p className="mb-1 font-semibold dark:text-white">
              Capital:{" "}
              <span className="font-normal text-gray-500 dark:text-white">
                {country.capital}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardCountry;
