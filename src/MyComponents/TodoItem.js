import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
  return (
    <div>
      <h4  className='text-center mb-4'>{todo.title}</h4>
      <p className='text-center text-warning p-2'>{todo.desc}</p>
      <button className='btn btn-sm btn-danger'  onClick={()=>{onDelete(todo)}}>Delete</button>


    </div>
  )
}

export default TodoItem

//export const TodoItem = ({todo,onDelete})

//chahe iske ander props likh do ya jo values props k liye chahiye..

// onClick={()=>{onDelete(todo)}} used this because ab jis todo pe click kr rhi hun sirf wahi delete ho rha hai .. 