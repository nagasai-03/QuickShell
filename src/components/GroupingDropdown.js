import React from "react";

function GroupingDropdown({ setGrouping }) {
  return (
    <select onChange={(e) => setGrouping(e.target.value)}>
      <option value="status">Group by Status</option>
      <option value="assigned_user">Group by User</option>
      <option value="priority">Group by Priority</option>
    </select>
  );
}

export default GroupingDropdown;