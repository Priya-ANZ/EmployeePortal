import React from "react";
const SearchBox = ({ value, onChange }) => {
  return (
    <input
        className ="sticky-top"
      type="text"
      placeholder="Search By Name..."
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
      className="form-control"
    />
  );
};

export default SearchBox;