
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ onHandleSearch }) => {

  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;

    setSearch(value);
    onHandleSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Search user"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

Search.propTypes = {
  onHandleSearch: PropTypes.func
};

export default Search;
