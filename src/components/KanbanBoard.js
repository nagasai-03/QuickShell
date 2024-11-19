import React, { useState } from "react";
import "./KanbanBoard.css";
import TicketCard from "./TicketCard";
import todoIcon from "../assets/icons_FEtask/To-do.svg";
import inProgressIcon from "../assets/icons_FEtask/in-progress.svg";
import doneIcon from "../assets/icons_FEtask/Done.svg";
import canceledIcon from "../assets/icons_FEtask/Cancelled.svg";
import displayIcon from "../assets/icons_FEtask/Display.svg";
import addCardIcon from "../assets/icons_FEtask/add.svg"; // Add Card icon

const categoryIcons = {
  todo: todoIcon,
  inProgress: inProgressIcon,
  done: doneIcon,
  canceled: canceledIcon,
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState({
    todo: [
      { id: 1, title: "Task 1", description: "Description of Task 1", priority: "low" },
      { id: 2, title: "Task 2", description: "Description of Task 2", priority: "medium" },
    ],
    inProgress: [
      { id: 3, title: "Task 3", description: "Description of Task 3", priority: "high" },
    ],
    done: [
      { id: 4, title: "Task 4", description: "Description of Task 4", priority: "urgent" },
    ],
    canceled: [
      { id: 5, title: "Task 5", description: "Description of Task 5", priority: "low" },
    ],
  });

  const handleDrop = (e, category) => {
    const ticketId = e.dataTransfer.getData("id");
    const sourceCategory = e.dataTransfer.getData("category");

    if (!ticketId || !sourceCategory) return;

    const ticket = tasks[sourceCategory].find((t) => t.id === parseInt(ticketId));
    const updatedSource = tasks[sourceCategory].filter((t) => t.id !== parseInt(ticketId));
    const updatedCategory = [...tasks[category], ticket];

    setTasks({
      ...tasks,
      [sourceCategory]: updatedSource,
      [category]: updatedCategory,
    });
  };

  const handleDragStart = (e, id, category) => {
    e.dataTransfer.setData("id", id);
    e.dataTransfer.setData("category", category);
  };

  const handleAddCard = (category) => {
    alert(`Add a new card to ${category}!`);
  };

  const handleColumnOptions = (category) => {
    alert(`Options for ${category} column`);
  };

  return (
    <div className="kanban-board">
      {/* Header with Display dropdown */}
      <div className="header">
        <div className="display-dropdown">
          <img src={displayIcon} alt="Display Icon" className="display-icon" />
          <button className="dropdown-button">
            Display <span className="dropdown-arrow">▼</span>
          </button>
          <div className="dropdown-content">
            <div>
              <label>Grouping:</label>
              <select>
                <option>Status</option>
                <option>Priority</option>
              </select>
            </div>
            <div>
              <label>Ordering:</label>
              <select>
                <option>Priority</option>
                <option>Date</option>
              </select>
            </div>
          </div>
        </div>
        <h1>Kanban Board</h1>
      </div>

      <div className="columns">
        {["todo", "inProgress", "done", "canceled"].map((category) => (
          <div
            key={category}
            className="column"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, category)}
          >
            <div className="column-header">
              <img
                src={categoryIcons[category]}
                alt={`${category} icon`}
                className="category-icon"
              />
              <h2>{category.replace(/([A-Z])/g, " $1")}</h2>
              <div className="column-actions">
                <button
                  className="add-card-button"
                  onClick={() => handleAddCard(category)}
                >
                  <img src={addCardIcon} alt="Add Card" className="add-icon" />
                </button>
                <button
                  className="column-options-button"
                  onClick={() => handleColumnOptions(category)}
                >
                  ...
                </button>
              </div>
            </div>
            {tasks[category].map((task) => (
              <TicketCard
                key={task.id}
                task={task}
                category={category}
                onDragStart={handleDragStart}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;