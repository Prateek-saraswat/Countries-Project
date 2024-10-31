import CountryCard from "./CountryCard";
import { useEffect, useState } from "react";
import CountryContainerShimmer from "./CountryContainerShimmer";

export default function CountriesContainer({ query }) {
  const [CountrieData, setCountrieData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountrieData(data);
      });

    return () => {
      console.log("hi");
    };
  }, []);
  return !CountrieData.length ? (
    <CountryContainerShimmer />
  ) : (
    <div className="countries-container">
      {CountrieData.filter((country) =>
        country.name.common.toLocaleLowerCase().includes(query) || country.region.toLocaleLowerCase().includes(query) 
      ).map((country) => {
        return (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            imgSrc={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
            countData= {country}
          />
        );
      })}
    </div>
  );
}
