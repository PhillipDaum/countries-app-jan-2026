import { useParams, Link } from "react-router-dom";

export default function CountryDetail( { allCountries }) {
  const countryName = useParams().countryName;
  const oneCountry = allCountries && allCountries.find((country) => country.name.common === countryName);
 
  const handleSave = () => console.log(`${oneCountry} is not saved... yet
                                              \n this feature will be coming soon
                                              \n act now and subscribe for future updates`)
  
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
              <button onClick={handleSave}>Save</button>
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
              {/* later put viewed count here */}
              {/* later put border countries here */}
            </div>
          </div>
        </>
      )}
    </>
  );
}
