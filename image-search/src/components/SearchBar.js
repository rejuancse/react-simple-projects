import './SearchBar.css';
import React from 'react';
import { useState } from "react";

function SearchBar({onSubmit}) {
  const [term, setTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  }

  const handleChanges = (event) => {
    setTerm(event.target.value);
  }

  return (
    <React.Fragment>
      <form className='search-bar' onSubmit={handleSubmit}>
        <h3>Search your Images</h3>
        <input value={term} onChange={handleChanges} />
      </form>
    </React.Fragment>
  );
}

export default SearchBar;
