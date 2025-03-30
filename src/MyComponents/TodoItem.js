import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
  return (
    
    <>
    <div>
      <h4  className=' fs-4 mb-2'>{todo.title}</h4>
      <p className='text-secondary fw-bolder p-2'>{todo.desc}</p>
      <button className='btn btn-sm mb-2 btn-danger'  onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
    <hr/>
    </>
  )
}

export default TodoItem

//export const TodoItem = ({todo,onDelete})

//chahe iske ander props likh do ya jo values props k liye chahiye..

// onClick={()=>{onDelete(todo)}} used this because ab jis todo pe click kr rhi hun sirf wahi delete ho rha hai .. 