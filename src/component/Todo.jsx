import React from "react";
import { BsFillEraserFill } from "react-icons/bs";

export default function Todo({todo, onUpdate, onDelete}) {

    const handleChange = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({...todo, status })
    }

    const handleDelete = () => {
        onDelete(todo)
    }

  return (
    <li key={todo.id} className="flex justify-between">
      <div className="flex w-full">
        <input className="w-4" type="checkbox"  onChange={handleChange}/>
        <label className="w-[70%] inline-block text-white ml-2" checked={todo.status === 'completed'} htmlFor="checkbox">
          {todo.todo}
        </label>
      </div>
      <button onClick={handleDelete} className=" w-5 h-5 flex items-center justify-center bg-white rounded-full">
        <BsFillEraserFill />
      </button>
    </li>
  );
}
