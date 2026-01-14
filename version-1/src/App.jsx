import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
// pages
import Home from "./pages/Home";
import SavedCountries from "./pages/SavedCountries";
import CountryDetail from "./pages/CountryDetail";
import localData from "../localData"; // local data
import "./App.css"; // styles

function App() {
  const [allCountries, setAllCountries] = useState([]);

  const fetchCountryData = async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,cca3,borders"
      );
      const data = await response.json();
      // sorted alphabetically by common name
      const sorted = data.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      setAllCountries(sorted);
    } catch (error) {
      console.error("error fetching data from restcountries.com", error);
      console.log("allCountries set through localData.js")
      setAllCountries(localData);
    }
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <div>
      <header className="nav-header">
        <nav>
          <ul>
            <li>
              <Link to="/" className="nav-home">
                Where in the world?
              </Link>
            </li>
            <li>
              <Link to="/saved-countries">Saved Countries</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home allCountries={allCountries} />} />
          <Route path="/country-detail" element={<CountryDetail />} />
          <Route path="/saved-countries" element={<SavedCountries />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
