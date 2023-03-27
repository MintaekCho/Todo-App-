import React from 'react';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'

export default function AddTodo({onAdd, todo}) {

    // input창 상태관리 - input에 text가 입력되면 onchange를 통해 setText를 콜백함수로 등록하여 상태를 관리한다.
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // text가 비어있으면 등록x -- 공백이 있으면 공백을 제거 후 todo에 등록
        if(text.trim().length !== 0) onAdd({id : uuidv4(), todo : text, status: 'Active'})
        setText('');
    }

    
    return (
        <form className="w-[90%] h-2/5 flex rounded-xl" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="오늘은 뭐하징?"
            onChange={handleChange}
            value={text}
            className="w-4/5 h-full p-4 rounded-l-[inherit]"
          />
          <button
            className="w-1/5 h-full bg-gray-600 rounded-r-[inherit] text-white text-xl font-bold hover:brightness-125"
          >
            Add
          </button>
        </form>
    );
}
