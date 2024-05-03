import React, { useEffect, useState } from "react";
import CardCountry from "./CardCountry";
import { useNavigate } from "react-router-dom";
import { fetchData } from "./countryAPI"; // Import the fetchData function
const Countries = ({ searchTyped, selectedRegion }) => {
  const link = "https://restcountries.com/v3.1";
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const navigate = useNavigate();

  const fetchDataAndSetCountries = async () => {
    const data = await fetchData(selectedRegion);
    if (data) {
      setCountries(data);
      setFilteredCountries(data);
    }
  };
  useEffect(() => {
    fetchDataAndSetCountries();
  }, [selectedRegion]);

  const filterSearch = (searchTyped) => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTyped.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  useEffect(() => {
    if (searchTyped) {
      filterSearch(searchTyped);
    } else {
      setFilteredCountries(countries);
    }
  }, [searchTyped, countries]);

  return (
    <div className="countries-container grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
      {filteredCountries.length > 0 ? (
        filteredCountries.map((country) => (
          <CardCountry
            key={country.name.common}
            country={country}
            onClick={() => navigate(`/${country.name.common}`)}
          />
        ))
      ) : (
        <div className="absolute top-1/2 translate-y-[-50%]">
          <h2 className="text-[28px] text-[#474747]">
            No Countries to show...
          </h2>
        </div>
      )}
    </div>
  );
};

export default Countries;
