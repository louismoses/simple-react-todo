import React from "react";
import { useState } from "react";

const TodoItem = (props) => {
  const [isCompleted, setIsCompleted] = useState(false);
  function handleLineThrough() {
    setIsCompleted(!isCompleted);
  }

  return (
    <div>
      <li className="py-3 sm:py-4" key={props.text} onClick={handleLineThrough}>
        <div
          className={`flex items-center space-x-4 ${
            isCompleted ? "line-through" : ""
          }`}
        >
          <div className="flex-shrink-0">
            {!isCompleted ? (
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <path d="M3.27 6.96 12 12.01l8.73-5.05"></path>
                <path d="M12 22.08V12"></path>
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m9 11 3 3L22 4"></path>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate ">
              {props.text}
            </p>
          </div>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;
