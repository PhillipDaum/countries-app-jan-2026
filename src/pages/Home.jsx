import CountryCard from "../components/CountryCard";

export default function Home({ localData }) {
  return (
    <>
      <div className="countries-grid">
        {localData.map((country, index) => {
          return <CountryCard key={index} country={country} />;
        })}
      </div>
    </>
  );
}
