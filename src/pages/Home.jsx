import CountryCard from "../components/CountryCard";

export default function Home({ countries }) {
  return (
    <>
      <div className="countries-grid">
        {countries.map((country, index) => {
          return <CountryCard key={index} country={country} />;
        })}
      </div>
    </>
  );
}
