import { useState } from "react";

import "./App.scss";
import Information from "./components/Information/information";
import Search from "./components/Search/search";
import Temperature from "./components/Temperature/temperature";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <Search query={query} setQuery={setQuery} setWeather={setWeather} />
        {typeof weather.main != "undefined" ? (
          <>
            <Information weather={weather} />
            <Temperature weather={weather} />
          </>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
