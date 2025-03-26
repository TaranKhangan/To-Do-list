import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem";

const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center m-5 p-4'>Todos List</h3>
      {props.todos.length===0? "No todos to display!!":
      props.todos.map((todo)=>{
       return <TodoItem todo = {todo} key={todo.s_No} onDelete={props.onDelete}/>
      })}
      
    </div>
  )
}
//In map i have to mention a unique key toooo

//jese yaha par maine props likha hai to i have to mention things like props. and so on...
export default Todos
