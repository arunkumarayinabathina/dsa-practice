import React from 'react';
import './App.css'; // Ensure you import the CSS file

function SearchBar({ searchTerm, setSearchTerm, searchTopic, setSearchTopic, searchDate, setSearchDate }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search questions..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <input
        type="text"
        placeholder="Search by topic..."
        value={searchTopic}
        onChange={(e) => setSearchTopic(e.target.value)}
        className="search-input"
      />
      <input
        type="date"
        value={searchDate}
        onChange={(e) => setSearchDate(e.target.value)}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;
