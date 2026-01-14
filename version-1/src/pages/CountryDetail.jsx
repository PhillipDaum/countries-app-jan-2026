export default function CountryDetail({ country }) {
  // add border countries
  const { name, population, region, capital, flags } = country;

  // useparams
  return (
    // make a div with or something with two columns
    <>
      {/* image */}
      <img src={flags.png} alt={country.flags.alt} />
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
        <p>
          <span className="bold">Border Countries:</span>
          {
            ` ${region}`
            // map over border countries and make little buttons here
          }
        </p>
      </div>
    </>
  );
}
