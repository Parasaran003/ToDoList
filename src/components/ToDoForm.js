import React from 'react'
import { useState } from 'react';
export const ToDoForm = ({addTodo}) => {
  const [value,setValue] = useState("");
  const handleSubmit = (event) =>{
    event.preventDefault();
    addTodo(value);
    setValue("");
  }
  return (
    <form className='ToDoForm' onSubmit={handleSubmit}>
        <input type='text' value={value} className='todo-input' placeholder='What is the task today?'onChange={(event)=>{
            setValue(event.target.value)
        }}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
