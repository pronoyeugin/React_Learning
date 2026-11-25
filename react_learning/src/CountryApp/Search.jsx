import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";

const Search = ({ onSearch  }) => {
  const [searchText, setSearchText] = useState(''); 

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect (() => {
    onSearch(searchText);
  },[searchText, onSearch]);


  return (
    <div className="search-container">
      <span className="search-icon">
            <CiSearch />
        </span>
      
      <input
        className="search-input"
        type="text"
        placeholder="Search Country..."
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;