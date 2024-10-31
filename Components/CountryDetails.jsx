import { useEffect, useState } from "react";
import "./CountryDetail.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { useWindowSize } from "../hooks/useWindowSize";
import { useTheme } from "../hooks/useTheme";
import CountryDetailShimmer from "./CountryDetailShimmer";

export default function CountryDetails() {
  const [isDark, setIsDark] = useTheme();
  const params = useParams();
  const { state } = useLocation();
  const countryName = params.country;
  const [CountryData, setCountryData] = useState(null);
  const [Error, setError] = useState(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        setCountryData({
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          population: data.population.toLocaleString("en-IN"),
          region: data.region,
          subRegion: data.subregion,
          capital: data.capital?.[0],
          languages: Object.values(data.languages).join(", "),
          currencies: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(", "),
          tld: data.tld.join(", "),
          imgSrc: data.flags.svg,
          border: [],
        });

        if (!data.borders) {
          data.borders = [];
        }

        Promise.all(
          data.borders.map((bordercode) => {
            return fetch(`https://restcountries.com/v3.1/alpha/${bordercode}`)
              .then((res) => res.json())
              .then(([data]) => data.name.common);
          })
        ).then((data) => {
          setCountryData((prevState) => ({ ...prevState, border: [...data] }));
        });
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [countryName]);
  if (Error) {
    return (
      <div
        style={{
          display: "flex",
          fontSize: "44px",
          justifySelf: "center",
          marginTop: "20%",
          color: "red",
          padding: "40px",
        }}
      >
        Country not Found : Error 404
      </div>
    );
  }
  return CountryData === null ? (
    <CountryDetailShimmer />
  ) : (
    <main className={`${isDark ? "dark" : ""}`}>

      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={CountryData.imgSrc} alt={CountryData.name.common} />
          <div className="details-text-container">
            <h1>{CountryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                <span className="native-name">{CountryData.nativeName}</span>
              </p>
              <p>
                <b>Population: </b>
                <span className="population">{CountryData.population}</span>
              </p>
              <p>
                <b>Region: </b>
                <span className="region">{CountryData.region}</span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="sub-region">{CountryData.subRegion}</span>
              </p>
              <p>
                <b>Capital: </b>
                <span className="capital">{CountryData.capital}</span>
              </p>
              <p>
                <b>Top Level Domain: </b>
                <span className="top-level-domain">{CountryData.tld}</span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="currencies">{CountryData.currencies}</span>
              </p>
              <p>
                <b>Languages: </b>
                <span className="languages">{CountryData.languages}</span>
              </p>
            </div>
            {CountryData.border.length != 0 && (
              <div className="border-countries">
                <b>Border Countries: </b>&nbsp;
                {CountryData.border.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
