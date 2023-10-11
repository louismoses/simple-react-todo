import React, { useState } from "react";

const InputArea = (props) => {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
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
            onClick={(event) => {
              props.onAdd(inputText);
              setInputText("");
              event.preventDefault();
            }}
            type=""
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputArea;
