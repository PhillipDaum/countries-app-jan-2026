import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function CountryDetail({ allCountries }) {
  const [viewedAmount, setViewedAmount] = useState(null);
  const [isSaved, setIsSaved] = useState(null);
  const countryName = useParams().countryName;
  const oneCountry = allCountries && allCountries.find((country) => country.name.common === countryName);
 
  const updateCountryCount = async () => {
    const response = await fetch("/api/update-one-country-count", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country_name: oneCountry.name.common,
      })
    });
    const result = await response.json();
    setViewedAmount(result.count);
  }

  const handleSave = async () => {
    const response = await fetch("/api/save-one-country", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country_name: oneCountry.name.common,
      })
    });
    const result = await result.text();
    console.log(result)
  } 
  
  
  useEffect(() => {
    if (oneCountry) {
      updateCountryCount();
    } 
  }, [oneCountry])
  
  return (
    <>
      {oneCountry && (
        <>
          <Link to="/" className="link-as-button">
            ← Back
          </Link>
          <div className="country-detail-page-card">
            <img src={oneCountry.flags.svg} alt={oneCountry.flags.alt} />
            <div className="country-card-contents">
              <h3>{oneCountry.name.common}</h3>
              {/* add onClick function to save country */}
              <button onClick={handleSave}>🩶</button>
              <button onClick={handleSave}>❤️</button>
              <p>
                <span className="bold">Population:</span>
                {` ${oneCountry.population.toLocaleString()}`}
              </p>
              <p>
                <span className="bold">Region:</span>
                {` ${oneCountry.region}`}
              </p>
              <p>
                <span className="bold">Capital:</span>
                {` ${oneCountry.capital?.[0]}`}{" "}
                {/* picks the first item for that one country with two capitals */}
              </p>
              {viewedAmount && (
                <p>
                  <span className="bold">Viewed:</span>
                  {` ${viewedAmount}`}
                </p>
              )}
              {/* later put border countries here */}
            </div>
          </div>
        </>
      )}
    </>
  );
}
