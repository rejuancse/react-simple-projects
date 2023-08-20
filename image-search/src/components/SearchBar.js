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
    <div>
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={handleChanges} />
      </form>
    </div>
  );
}

export default SearchBar;
