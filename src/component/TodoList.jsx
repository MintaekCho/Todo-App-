import React from "react";
import { useState } from "react";
import { TiAdjustBrightness } from "react-icons/ti";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

export default function TodoList() {

    const [todos, setTodos] = useState([]);

    const handleAdd = (todo) => setTodos([...todos, todo])

    const handleUpdate = (updated) => {
        setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
    }
    const handleDelete = (deleted) => setTodos(todos.filter((t) => t.id !== deleted.id))
  
  return (
    <section className="w-1/3 h-3/4 mh bg-emerald-200 rounded-[30px] flex flex-col">
      <nav className="w-full h-[15%] bg-indigo-900 rounded-t-[inherit] border-b-2 border-gray-300 flex items-center justify-between p-6">
        <button className="text-[2rem] text-gray-100">
          <TiAdjustBrightness />
        </button>
        <div className="flex items-center justify-center">
          <button className="m-4 text-gray-100 font-bold text-[1em]">
            All
          </button>
          <button className="m-4 text-gray-100 font-bold text-[1em]">
            Active
          </button>
          <button className="m-4 text-gray-100 font-bold text-[1em]">
            Completed
          </button>
        </div>
      </nav>
      <main className="w-full h-[70%] bg-gray-900">
        <ul className="w-full h-full p-5">
          {todos &&
            todos.map((item) => (
              <Todo
              todo={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
              ></Todo>
            ))}
        </ul>
      </main>
      <footer className="w-full h-[15%] bg-indigo-900 rounded-b-[inherit] border-t-2 border-gray-300 flex justify-center items-center">
       <AddTodo onAdd={handleAdd}></AddTodo>
      </footer>
    </section>
  );
}
