import React, { useState } from "react";
import TodoItem from "./TodoItem";

const Card = () => {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function handleClick(event) {
    setItems((prevItem) => {
      return [...prevItem, inputText];
    });
    setInputText("");
    event.preventDefault();
  }

  return (
    <div className="flex place-content-center min-h-screen m-3">
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
        <div className="flex items-center justify-center mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 ">
            To-Do List
          </h5>
        </div>
        <div>
          <form>
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="To-Do"
                required
                onChange={handleChange}
                value={inputText}
              />
              <button
                onClick={handleClick}
                type=""
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
              >
                Add
              </button>
            </div>
          </form>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 ">
            {items.map((todoItem) => {
              return <TodoItem text={todoItem} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
