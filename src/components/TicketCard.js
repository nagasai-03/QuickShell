import React from "react";
import "./TicketCard.css";
import lowPriorityIcon from "../assets/icons_FEtask/Img - Low Priority.svg";
import mediumPriorityIcon from "../assets/icons_FEtask/Img - Medium Priority.svg";
import highPriorityIcon from "../assets/icons_FEtask/Img - High Priority.svg";
import urgentPriorityIcon from "../assets/icons_FEtask/SVG - Urgent Priority colour.svg";

const priorityIcons = {
  low: lowPriorityIcon,
  medium: mediumPriorityIcon,
  high: highPriorityIcon,
  urgent: urgentPriorityIcon,
};

const TicketCard = ({ task, category, onDragStart }) => {
  return (
    <div
      className="ticket-card"
      draggable
      onDragStart={(e) => onDragStart(e, task.id, category)}
    >
      <div className="ticket-header">
        <h3>{task.title}</h3>
        <img
          src={priorityIcons[task.priority]}
          alt={`${task.priority} priority`}
          className="priority-icon"
        />
      </div>
      <p>{task.description}</p>
    </div>
  );
};

export default TicketCard;