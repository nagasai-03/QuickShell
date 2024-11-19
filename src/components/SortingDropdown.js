import React from "react";

function SortingDropdown({ setSorting }) {
  return (
    <select onChange={(e) => setSorting(e.target.value)}>
      <option value="priority">Sort by Priority</option>
      <option value="title">Sort by Title</option>
    </select>
  );
}

export default SortingDropdown;