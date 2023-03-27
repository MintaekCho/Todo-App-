import React from 'react';
import TodoList from './TodoList';

export default function Wrap() {
    return (
        <div className="w-screen h-screen dark:bg-gray-600 flex items-center justify-center">
            <TodoList></TodoList>
        </div>
    );
}

