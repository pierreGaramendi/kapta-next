"use client";

import { useState } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CiChat1 } from "react-icons/ci";

export default function Page() {
  const initialColumns = [
    {
      id: "backlog",
      title: "Backlog",
      tasks: [
        {
          id: "task1",
          title: "Design user flow",
          description: "Create wireframes for main user journeys",
          status: "Backlog",
          priority: "high",
          attachments: 2,
          comments: 5,
        },
        {
          id: "task2",
          title: "Implement auth",
          description: "Set up user authentication system",
          status: "Backlog",
          priority: "medium",
          attachments: 1,
          comments: 3,
        },
      ],
    },
    {
      id: "inProgress",
      title: "In Progress",
      tasks: [
        {
          id: "task3",
          title: "Develop API",
          description: "Create RESTful API endpoints",
          status: "In Progress",
          priority: "high",
          attachments: 0,
          comments: 7,
        },
      ],
    },
    {
      id: "done",
      title: "Done",
      tasks: [
        {
          id: "task4",
          title: "Set up CI/CD",
          description: "Configure automated deployment pipeline",
          status: "Done",
          priority: "low",
          attachments: 3,
          comments: 2,
        },
      ],
    },
  ];
  const [columns, setColumns] = useState(initialColumns);
  return (
    <div>
      <main className="flex-1 flex flex-col">
        <div className="flex-1 p-6 overflow-x-auto">
          <div>
            <div className="flex space-x-4">
              {columns.map((column) => (
                <div key={column.id}>
                  <div className="bg-gray-800 p-4 rounded-lg w-80 flex-shrink-0">
                    <h2 className="text-lg font-semibold mb-4">{column.title}</h2>
                    {column.tasks.map((task, index) => (
                      <div key={task.id}>
                        <div className="bg-gray-700 p-4 rounded-md mb-3 shadow-sm hover:shadow-md transition-shadow duration-200">
                          <h3 className="font-semibold mb-2">{task.title}</h3>
                          <p className="text-sm text-gray-400 mb-3">{task.description}</p>
                          <div className="flex items-center justify-between text-xs">
                            <span
                              className={`px-2 py-1 rounded-full ${
                                task.priority === "high"
                                  ? "bg-red-500"
                                  : task.priority === "medium"
                                  ? "bg-yellow-500"
                                  : "bg-green-500"
                              }`}
                            >
                              {task.priority}
                            </span>
                            <div className="flex items-center space-x-2">
                              <span className="flex items-center">
                                <IoDocumentTextOutline size={14} className="mr-1" />
                                {task.attachments}
                              </span>
                              <span className="flex items-center">
                                <CiChat1 size={16} className="mr-1" />
                                {task.comments}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
