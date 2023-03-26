import React from 'react';
import TodoList from './TodoList';

export default function Wrap() {
    return (
        <div className="w-screen h-screen bg-gray-300 flex items-center justify-center">
            <TodoList></TodoList>
        </div>
    );
}

