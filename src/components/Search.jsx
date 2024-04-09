import { useState, useEffect } from "react";

function Search() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/comics", "http://localhost:3000/characters");
  }, []);

  return (
    <>
      <div className="seach">
        <input
          type="text"
          name="search"
          id="searchBar"
          placeholder="Rechercher"
        />
      </div>
      <div className="search-results">
        <div className="search-result">donnée</div>
      </div>
    </>
  );
}

export default Search;
