import React, { useState } from "react";

const SearchPage = () => {
  const [result, setResult] = useState({});
  const [input, setInput] = useState("");

  const handleChange = e => setInput(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`https://xkcd.now.sh/?comic=${input}`)
      .then(res => res.json())
      .then(res => setResult(res));
  };

  return (
    <React.Fragment>
      <section className="search-content">
        <input
          type="text"
          className="searchInput"
          onChange={handleChange}
          placeholder="Search by number"
        />
        <button type="submit" className="searchSubmit" onClick={handleSubmit}>
          search
        </button>
      </section>

      <section className="content">
        {result.img ? (
          <div className="image-container">
            <div className="title">
              <h3>{result.safe_title}</h3>
              <small>{`Published on ${result.day || ""}/${result.month ||
                ""}/${result.year || ""}`}</small>
            </div>
            <img
              className="latestImage"
              src={result.img}
              alt={result.title}
              title={result.alt}
            />
          </div>
        ) : (
          ""
        )}
      </section>
    </React.Fragment>
  );
};

export default SearchPage;
