import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

const Card = () => {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItem) => {
      return [...prevItem, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="flex place-content-center min-h-screen m-3">
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
        <div className="flex items-center justify-center mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 ">
            To-Do List
          </h5>
        </div>
        <InputArea onAdd={addItem} />
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 ">
            {items.map((todoItem, index) => (
              <TodoItem
                key={index}
                id={index}
                text={todoItem}
                onChecked={deleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
