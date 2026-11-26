
import React, { useState, useEffect } from 'react';

import useFetch from './useFetch';
import Search from './Search';
import Users from './Users';

const Index = () => {

  const { data, isLoading, error } 
    = useFetch('https://jsonplaceholder.typicode.com/users');

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  // API data to users state update
  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  // Search handler
  const handleSearch = (searchValue) => {
    setSearch(searchValue);
  };

  // Delete handler
  const handleDeleteUser = (id) => {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== id)
    );
  };

  // Filter users
  const filteredData = users.filter((user) => {
    const value = search.toLowerCase().trim();
    return (
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value) ||
      user.phone.toLowerCase().includes(value)
    );

  });

  return (
    <>
      <h5>Assignment-05:</h5>

      <Search onHandleSearch={handleSearch} />

      {isLoading && <p>Loading users...</p>}

      {error && <p>{error}</p>}

      {!isLoading && !error && (
        <Users
          users={filteredData}
          onHandleDeleteUser={handleDeleteUser}
        />
      )}
    </>
  );
};

export default Index;
