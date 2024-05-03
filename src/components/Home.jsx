import React, { useContext, useState } from "react";
import { SearchFilter } from "./SearchFilter";
import Countries from "./Countries";
import { DarkContext } from "../context/darkmodeContext";

const Home = () => {
  const { dark, setDark } = useContext(DarkContext);
  const [searchTyped, setSearchTyped] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  return (
    <main
      style={{ backgroundColor: dark ? "#202D36" : "#fff", marginBottom: 10 }}
      className="min-h-screen pb-10"
    >
      <div className="container">
        <SearchFilter
          setsearchTyped={setSearchTyped}
          setSelectedRegion={setSelectedRegion}
        />
        <Countries searchTyped={searchTyped} selectedRegion={selectedRegion} />
      </div>
    </main>
  );
};

export default Home;
