import React from "react";
import { BsFillEraserFill } from "react-icons/bs";

export default function Todo({ todo, onUpdate, onDelete }) {
  // checkbox 클릭시 todo status 상태값 변경
  const handleChange = (e) => {
    const status = e.target.checked ? "Completed" : "Active";
    onUpdate({ ...todo, status });
  };

  // 삭제 버튼 클릭시 props 함수인 onDelete(handleDelete)함수 실행
  const handleDelete = () => {
    onDelete(todo);
  };

  return (
    <li key={todo.id} className="flex justify-between">
      <div className="flex w-full">
        {/* checked에 조건을 입력하여 체크박스의 상태를 정할 수 있음 */}
        <input
          className="w-[1.5rem]"
          type="checkbox"
          checked={todo.status === "Completed"}
          onChange={handleChange}
        />
        <label
          className="w-[70%] inline-block font-bold text-black dark:text-white ml-2 text-[1.5rem]"
          htmlFor="checkbox"
        >
          {todo.todo}
        </label>
      </div>
      <span className="flex items-center justify-center">
        <button
          onClick={handleDelete}
          className= {`w-[1.8rem] h-[1.8rem] flex items-center justify-center bg-white rounded-full hover:bg-green-700`}
        >
          <BsFillEraserFill />
        </button>
      </span>
    </li>
  );
}
