import React from "react";
import { BsFillEraserFill } from "react-icons/bs";

export default function Todo({todo, onUpdate, onDelete}) {

    // checkbox 클릭시 todo status 상태값 변경
    const handleChange = (e) => {
        const status = e.target.checked ? 'Completed' : 'Active';
        onUpdate({...todo, status })
    }

    // 삭제 버튼 클릭시 props 함수인 onDelete(handleDelete)함수 실행
    const handleDelete = () => {
        onDelete(todo)
    }

  return (
    <li key={todo.id} className="flex justify-between">
      <div className="flex w-full">

         {/* checked에 조건을 입력하여 체크박스의 상태를 정할 수 있음 */}
        <input className="w-4" type="checkbox" checked={todo.status === 'Completed'}  onChange={handleChange}/>
        <label className="w-[70%] inline-block text-white ml-2"  htmlFor="checkbox">
          {todo.todo}
        </label>
      </div>
      <button onClick={handleDelete} className=" w-5 h-5 flex items-center justify-center bg-white rounded-full">
        <BsFillEraserFill />
      </button>
    </li>
  );
}
