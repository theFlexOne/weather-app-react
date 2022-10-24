import "./header.css";
import logo from "../../assets/images/weather-app-logo.png";
import { useState } from "react";

const Header = ({ handleSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchInput);
  };

  return (
    <header>
      <div className="logo" id="logo">
        <img src={logo} alt="weather app logo" />
      </div>

      <form className="search-form" onSubmit={handleSubmit}>
        <label htmlFor="searchBox"></label>
        <input
          type="search"
          name="Location Search"
          className="search-box"
          id="searchBox"
          placeholder="Search by City & State, or Zip Code"
          autoComplete="on"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
        <button type="submit" id="searchButton" className="search-button">
          <i className="material-icons-outlined">search</i>
        </button>
        <button
          type="button"
          id="userLocationButton"
          className="user-location-button"
          onClick={() => handleSearch("")}
        >
          <i className="material-icons-outlined">my_location</i>
        </button>
      </form>
      <nav>
        <a href="https://github.com/theFlexOne/weather-app-react">GitHub</a>
      </nav>
    </header>
  );
};

export default Header;
