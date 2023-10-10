import React from "react";
import { useState } from "react";

const TodoItem = (props) => {
  return (
    <div>
      <li
        className="py-3 sm:py-4"
        onClick={() => {
          props.onChecked(props.id);
        }}
      >
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <path d="M3.27 6.96 12 12.01l8.73-5.05"></path>
              <path d="M12 22.08V12"></path>
            </svg>
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
