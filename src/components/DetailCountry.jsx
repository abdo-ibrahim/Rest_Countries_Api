import React, { useContext, useEffect, useState } from "react";
import { DarkContext } from "../context/darkmodeContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import arrowLeft from "../assets/arrowLeft.svg";
import darkArrowLeft from "../assets/darkArrowLeft.svg";
import "./detailcountry.css";

const DetailCountry = () => {
  const link = "https://restcountries.com/v3.1";
  const { dark } = useContext(DarkContext);
  const [country, setCountry] = useState({});
  const { name } = useParams();
  const [codes, setCodes] = useState([]);
  const navigate = useNavigate();
  const numberFormatter = new Intl.NumberFormat("en-US");
  const API_URL_CODE = (borders) => {
    return `https://restcountries.com/v3.1/alpha?codes=${borders.join(",")}`;
  };

  const getBorders = async (borders) => {
    try {
      const response = await fetch(API_URL_CODE(borders));
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setCodes(data.map((code) => code.name.common));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await fetch(`${link}/name/${name}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCountry(data[0]);
        getBorders(data[0]?.borders);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCountryDetails();
  }, [name]);

  const getNativeName = () => {
    const nativeNameKeys = Object.keys(country.name?.nativeName || {});
    if (nativeNameKeys.length > 0) {
      const firstNativeNameKey = nativeNameKeys[0];
      return country.name?.nativeName[firstNativeNameKey]?.common || "";
    }
    return "";
  };

  const getCurrencies = () => {
    return Object.entries(country.currencies || {}).map(([code, cur]) => (
      <span
        key={code}
        className="mr-2 font-normal text-gray-500 dark:text-white"
      >
        {cur.name} ({cur.symbol})
      </span>
    ));
  };

  const renderLanguages = () => {
    return Object.entries(country.languages || {}).map(([code, language]) => (
      <span
        key={code}
        className="mr-2 font-normal text-gray-500 dark:text-white"
      >
        {language}
      </span>
    ));
  };
  return (
    <div className={dark ? "dark" : ""}>
      <div className="detail-country dark:bg-dark-400 min-h-screen">
        <div className="container pt-10">
          <div
            className="btn flex items-center gap-2 px-4 py-2 shadow-md w-fit rounded-md hover:bg-[#f5f5f5ee] dark:bg-dark-300 cursor-pointer dark:hover:bg-[#32414e]"
            onClick={() => navigate(-1)}
          >
            {dark ? (
              <img src={darkArrowLeft} alt="" className="w-[20px]" />
            ) : (
              <img src={arrowLeft} alt="" className="w-[20px]" />
            )}
            <button type="button" className="dark:text-white">
              Back
            </button>
          </div>
          <div className="details mt-10 flex justify-between gap-8 md:gap-16 items-center flex-wrap">
            <div className="w-full lg:w-[40%] h-[350px] shadow-md">
              <img
                src={country.flags?.png}
                alt=""
                className="w-full h-full object-fit"
              />
            </div>
            <div className="flex-1 py-[60px]">
              <div className="info flex items-center justify-between gap-8 flex-wrap md:flex-nowrap">
                <div className="col1">
                  <h3 className="mb-5 font-bold dark:text-white text-[35px]">
                    {country.name?.common}
                  </h3>
                  <p>
                    Native Name: <span>{getNativeName()}</span>
                  </p>
                  <p>
                    Population:{" "}
                    <span>{numberFormatter.format(country.population)}</span>
                  </p>
                  <p>
                    Region: <span>{country.region}</span>
                  </p>
                  <p>
                    Sub Region: <span>{country.subregion}</span>
                  </p>
                  <p>
                    Capital: <span>{country.capital}</span>
                  </p>
                </div>
                <div className="col2">
                  <p>
                    Top Level Domain: <span>{country.tld}</span>
                  </p>
                  <p>
                    Currencies: <span>{getCurrencies()}</span>
                  </p>
                  <p>
                    Languages: <span>{renderLanguages()}</span>
                  </p>
                </div>
              </div>
              {codes.length ? (
                <div className="border-country mt-8">
                  <p>
                    Border Countries:{" "}
                    <span className="flex flex-wrap mt-3">
                      {codes.map((border) => (
                        <span key={border}>
                          <Link
                            to={`/${border}`}
                            className="block rounded-sm px-4 py-1 m-1 text-center font-light shadow-md transition-all duration-150 hover:shadow-lg dark:bg-dark-300 dark:hover:shadow-md dark:hover:bg-[#32414e]"
                          >
                            {border}
                          </Link>
                        </span>
                      ))}
                    </span>
                  </p>
                </div>
              ) : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCountry;
