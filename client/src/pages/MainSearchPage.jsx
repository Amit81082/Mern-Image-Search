import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchPage.css";

function SearchPage(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState([]);
  const [history, setHistory] = useState([]);
  const [topSearches, setTopSearches] = useState([]);
  const [loading, setLoading] = useState(false); // add loading state

  const { user } = props;
  const userId = user.id; // <-- real Google user ID

  const fetchHistory = async () => {
    try {
      const res = await axios.get(
        `https://mern-image-search-57yy.onrender.com/api/history/${userId}`
      );
      setHistory(res.data);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchTopSearches = async () => {
    try {
      const res = await axios.get(
        "https://mern-image-search-57yy.onrender.com/api/top-searches"
      );
      setTopSearches(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!term.trim()) return;

     setLoading(true);

    try {
      const res = await axios.post(
        "https://mern-image-search-57yy.onrender.com/api/search",
        {
          term,
          userId,
        }
      );
      setResults(res.data.results);
      setSelected([]);
      fetchHistory(); // refresh history
      fetchTopSearches();
    } catch (err) {
      console.error(err);
      alert("Failed to fetch images");
    }finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
    fetchTopSearches();
    handleDownload();
  }, []);

  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleDownload = async () => {
    for (const id of selected) {
      const image = results.find((img) => img.id === id);
      const response = await fetch(image.urls.full);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `image-${id}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    }
  };

  return (
    <>
      <div className="search-container">
        {/* 🌟 Top Searches Banner */}
        <div className="top-searches">
          <div className="top-searches-banner">
            <h3>🔥 Top Searches:</h3>
            <button id="logOutBtn" onClick={props.onLogout}>
              Logout
            </button>
          </div>
          {topSearches.length === 0 ? (
            <p>No searches yet</p>
          ) : (
            <ul>
              {topSearches.map((item) => (
                <li key={item._id}>
                  {item._id} ({item.count})
                </li>
              ))}
            </ul>
          )}
        </div>
        <h2>🔍 Image Search</h2>

        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search images..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit" id="btn">
            Search
          </button>
        </form>

        {selected.length > 0 && (
          <div className="counter">
            <p>Selected: {selected.length} images</p>
            <button onClick={handleDownload}>Download</button>
          </div>
        )}

        {/* Loader 👇 */}
        {loading && <div className="loader"></div>}

        <div className="grid-container">
          {results.map((img) => (
            <div key={img.id} className="image-card">
              <input
                type="checkbox"
                checked={selected.includes(img.id)}
                onChange={() => handleSelect(img.id)}
              />
              <img src={img.urls.small} alt={img.alt_description} />
            </div>
          ))}
        </div>

        {/* Search History */}
        <div className="history">
          <h3>Your Search History</h3>
          <ul>
            {history.map((item) => (
              <li key={item._id}>
                {item.term} —{" "}
                {item.timestamp && new Date(item.timestamp).toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default SearchPage;
