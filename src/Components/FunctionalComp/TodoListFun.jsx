import React, { useState } from 'react';

const TodoListFun = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const inputHandler = (e) => {
    setTask(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;
    setTasks([...tasks, task]);
    setTask('');
  };

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div className='flex w-full h-screen justify-center items-center flex-col'>
      <form className='flex mb-4' onSubmit={addTask}>
        <input
          type='text'
          placeholder='Enter Task'
          className='border p-2'
          value={task}
          onChange={inputHandler}
        />
        <button className='p-2 bg-rose-300 ml-2 w-[100px]' type='submit'>
          Add
        </button>
      </form>

      <ul className='list-disc'>
        {tasks.map((t, index) => (
          <li key={index} className='flex items-center mb-2'>
            <span className='mr-4'>{t}</span>
            <button
              onClick={() => deleteTask(index)}
              className='bg-red-500 text-white px-2 py-1 rounded'
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListFun;
