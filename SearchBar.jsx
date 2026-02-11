import { useState } from "react";

function SearchBar({ onSearch }) {
  const [text, setText] = useState("");

  return (
    <div className="search-bar">
      <input
        placeholder="Enter Tamil movie name..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => onSearch(text)}>Search</button>
    </div>
  );
}

export default SearchBar;
