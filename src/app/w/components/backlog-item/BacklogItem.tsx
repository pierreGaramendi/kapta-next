"use client";
import React from "react";
import { IoMdSettings } from "react-icons/io";
type TaskCardProps = {
  title: string;
  description: string;
  labels: string[];
  priority: "low" | "medium" | "high";
  dueDate: string;
  onEdit?: () => void;
  onDelete?: () => void;
  className?: string;
};

export const BacklogItem: React.FC<TaskCardProps> = ({
  title,
  description,
  labels,
  priority,
  dueDate,
  onEdit,
  onDelete,
  className,
}) => {
  const priorityColors = {
    low: "bg-green-600",
    medium: "bg-yellow-600",
    high: "bg-red-600",
  };

  return (
    <div className={`bg-zinc-800 text-white p-4 rounded shadow-md ${className || ""}`}>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex space-x-2">
          <IoMdSettings size={20} />
          {/*           <button
            onClick={onEdit}
            className="text-gray-400 hover:text-blue-500"
          >
            ✏️
          </button>
          <button
            onClick={onDelete}
            className="text-gray-400 hover:text-red-500"
          >
            🗑️
          </button> */}
        </div>
      </div>
      <p className="text-sm mb-2">{description}</p>
      <div className="flex space-x-2 mb-4">
        {labels.map((label) => (
          <span key={label} className="text-xs bg-gray-600 py-1 px-2 rounded">
            {label}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <span className={`text-xs py-1 px-3 rounded-full ${priorityColors[priority]}`}>{priority.toUpperCase()}</span>
        <span className="text-xs text-gray-400">{dueDate}</span>
      </div>
    </div>
  );
};
