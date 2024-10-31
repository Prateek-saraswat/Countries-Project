import React from "react";
import { Link } from "react-router-dom";
import "./CountryContainerShimmer.css";

export default function CountryContainerShimmer() {
    //an way to create array
  // const array = new Array(10).fill(<Link className='country-card shimmer-card'></Link>)
  // console.log(array);

  return (
    <div className="countries-container">
      {Array.from({ length: 100 }).map((e, i) => {
        return (
          <Link key={i} className="country-card shimmer-card">
             <div className="flag-container"></div>
            <div className="card-text">
              <h3 className="card-title"></h3>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
