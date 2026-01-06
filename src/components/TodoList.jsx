import React, { useState } from 'react';

const TodoList = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);

    const saveTodo = (e) => {
        e.preventDefault();
        if (input.trim() === '') return alert('Enter todo here');
        setTodos([...todos, input]);
        setInput('');
    };

    // New delete function
    const deleteTodo = (indexToDelete) => {
        // Keeps all items except the one matching the clicked index
        const updatedTodos = todos.filter((_, index) => index !== indexToDelete);
        setTodos(updatedTodos);
    };

    return (
        <div className='flex flex-col justify-center items-center p-10'>
            <h1 className='text-xl font-bold mb-4'>TodoList</h1>
            <div className='flex gap-2 mb-4'>
                <input 
                    type="text" 
                    placeholder='Enter your todos' 
                    className='border-2 border-solid rounded-xl p-3'  
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                />
                <button 
                    className='px-4 py-2 bg-blue-500 text-white rounded-xl' 
                    onClick={saveTodo}
                >
                    Add
                </button>
            </div>
            
            <ul className='w-64'>
                {todos.map((item, index) => (
                    <li key={index} className='flex justify-between items-center border-b p-2'>
                        <span>{item}</span>
                        <button 
                            onClick={() => deleteTodo(index)}
                            className='text-red-500 hover:text-red-700 ml-4'
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
