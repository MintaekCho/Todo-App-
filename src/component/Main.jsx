import React from "react";
import { BsFillEraserFill } from "react-icons/bs"

export default function Main() {
  // const addTodo = () =>{
  //     localStorage.setItem('todo', )
  // }

  const todoList = [
    {
      id: 1,
      todo: "코딩공부하기",
    },
    {
      id: 2,
      todo: "놀기",
    },
  ];

  return (
    <div className="w-full h-[70%] bg-gray-900">
      <ul className='w-full h-full p-5'>
        {/* {todoList.forEach((item) => { */}
          <li className='flex justify-between'>
            <div className='flex w-full'>
                <input className='w-4' type="checkbox" />
                <span className='w-[70%] inline-block text-white ml-2'>{todoList[0].todo}</span>
            </div>
            <button className=' w-5 h-5 flex items-center justify-center bg-white rounded-full'>
                <BsFillEraserFill />
            </button>
          </li>;
        {/* })} */}
      </ul>
    </div>
  );
}
