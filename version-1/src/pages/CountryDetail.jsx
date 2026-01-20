import { useParams } from "react-router-dom";

export default function CountryDetail( { allCountries }) {
  const countryName = useParams().countryName;
  const oneCountry = allCountries.find((country) => country.name.common === countryName);
  const { name, population, region, capital, flags } = oneCountry;
  return (
    // make a div with or something with two columns
    <div className="country-detail-page">
      <div className="country-detail-page-card">
        <img src={flags.png} alt={flags.alt} />
        <div className="country-card-contents">
          <h3>{name.common}</h3>
          <p>
            <span className="bold">Population:</span>
            {` ${population.toLocaleString()}`}
          </p>
          <p>
            <span className="bold">Region:</span>
            {` ${region}`}
          </p>
          <p>
            <span className="bold">Capital:</span>
            {` ${capital?.[0]}`}{" "}
            {/* picks the first item for that one country with two capitals */}
          </p>
          {/* later put search count here */}
          {/* later put border countries here */}
        </div>
      </div>
    </div>
  );
}
