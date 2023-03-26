import React from "react";
import { useState } from "react";
import AddTodo from "./AddTodo";
import Header from "./Header";
import Todo from "./Todo";

export default function TodoList() {
    
    // 필터 목록
  const filters = ["All", "Active", "Completed"];

  // todoList 상태
  const [todos, setTodos] = useState([]);

  // 현재 필터 상태
  const [filter, setFilter] = useState(filters[0]);

  // form에서 todo 추가시 콜백함수
  const handleAdd = (todo) => setTodos([...todos, todo]);

  // todo check시 todo status 상태값 변경
  const handleUpdate = (updated) => {
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  };

  // todo 삭제버튼 클릭 시 todo상태에서 해당 todo 삭제
  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

    //todo 상태에 따른 필터링 데이터
    const filtered = getFilterTodos(todos, filter);

  return (
    <section className="min-w-[350px] min-h-[580px] w-1/3 h-3/4 mh bg-emerald-200 rounded-[30px] flex flex-col">
      <Header
        filters={filters}
        onFilterChange={setFilter}
      ></Header>
      <main className="w-full h-[70%] bg-gray-900">
        <ul className="w-full h-full p-5">
          {filtered.map((item) => (
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

// todo status 상태값에 따른 todo 배열 가져오기
function getFilterTodos(todos, filter) {
    if(filter === 'All') {
        return todos;
    }
    return todos.filter(t => t.status === filter)
}
