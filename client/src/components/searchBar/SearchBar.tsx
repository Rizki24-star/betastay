import React, { useState } from "react";
import "./searchBar.scss";

type QuerySearchBar = {
  type: string;
  location: string;
  minPrice: number;
  maxNumber: number;
};

const types = ["buy", "rent"];

const searchBar = () => {
  const [query, setQuery] = useState<QuerySearchBar>({
    type: "buy",
    location: "",
    minPrice: 0,
    maxNumber: 0,
  });

  const switchType = (searchType: string) => {
    setQuery((query) => ({ ...query, type: searchType }));
  };

  return (
    <div className="search-bar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form action="">
        <input type="text" name="location" placeholder="Village location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
        <button type="submit">
          <img src="/img/search.png" alt="search-icon" />
        </button>
      </form>
    </div>
  );
};

export default searchBar;
