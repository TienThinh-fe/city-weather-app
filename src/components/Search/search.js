import React from "react";

import "./search.scss";

function Search({ query, setQuery, setWeather }) {
  const api = {
    key: "9afdd2c3cff1f236bb5b94a05ce04469",
    baseUrl: "https://api.openweathermap.org/data/2.5/",
  };

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(
        `${api.baseUrl}weather?q=${event.target.value}&units=metric&appid=${api.key}`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeather(data);
          setQuery("");
          console.log(data);
        });
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="City name..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={(e) => search(e)}
      />
    </div>
  );
}

export default Search;
