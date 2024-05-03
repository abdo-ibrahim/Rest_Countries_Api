// countryAPI.js

const link = "https://restcountries.com/v3.1";

export const fetchData = async (selectedRegion) => {
  try {
    const response = await fetch(
      selectedRegion == "All"
        ? `${link}/all`
        : `${link}/region/${selectedRegion}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
