import React from "react";
import { useState } from "react";

export default function Footer() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const addTodo = () => {
    
  }
  
  return (
    <div className="w-full h-[15%] bg-indigo-900 rounded-b-[inherit] border-t-2 border-gray-300 flex justify-center items-center">
      <div className="w-[90%] h-2/5 flex rounded-xl">
        <input
          type="text"
          placeholder="오늘은 뭐하징?"
          onChange={handleChange}
          className="w-4/5 h-full p-4 rounded-l-[inherit]"
        />
        <button className="w-1/5 h-full bg-green-700 rounded-r-[inherit] text-white text-xl font-bold" onClick={addTodo}>
          Add
        </button>
      </div>
    </div>
  );
}
