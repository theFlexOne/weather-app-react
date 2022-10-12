import "./header.css";
import logo from "../../assets/images/weather-app-logo.png";
import { useState } from "react";

const Header = ({ onSearchFormSubmit }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchFormSubmit(searchInput);
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
        />
        <button type="submit" id="searchButton" className="search-button">
          <i className="material-icons-outlined">search</i>
        </button>
        <button
          type="button"
          id="userLocationButton"
          className="user-location-button"
        >
          <i className="material-icons-outlined">my_location</i>
        </button>
      </form>
      <nav>
        <a href="https://dev.to/eric_havey">Blog</a>
        <a href="https://github.com/theFlexOne/project-1-weather-app">GitHub</a>
        <a href="#">About</a>
      </nav>
    </header>
  );
};

export default Header;
