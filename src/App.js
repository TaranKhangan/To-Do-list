//import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import { useState } from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log('I am ondelete of todo ..', todo);
    //deleting this way will not be accepted by react ..
    //let index = todos.indexOf(todo);
    //todos.splice(index, 1);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  //setTodos is a function which will  update the todo everytime

  //+++++++++++++++AddTODO+++++++++++
  const addTodo=(title,desc)=>{
    console.log("its taking todos",title, desc);
    let s_No = todos[todos.length-1].s_No + 1;
    //to add the new todo at last..
    const myTodo={
      s_No: s_No,
      title:title,
      desc:desc,
    }
    setTodos([...todos, myTodo]);
    //have made an array so that todos can be set..
    console.log(myTodo);
  }


  const [todos, setTodos]= useState([{
    s_No: 1,
    title: "Complete ur Homework",
    desc: "You have to finish your homework."},
    {
     s_No: 2,
     title: "Complete ur Project",
     desc: "You have to finish your project."},
     {
      s_No: 3,
      title: "Complete ur Assignment",
      desc: "You have to finish your assignment."}
    
  ]);
  return (
   <>
     <Header title="MyTodosList"/>
     <AddTodo addTodo={addTodo}/>
     <Todos todos={todos} onDelete={onDelete}/>
     <Footer/>
     
   </>
  );
}

export default App;




//searchBar={false} for header props..

/*function App() {
  const onDelete = (todo)=>{
    console.log('I am ondelete of todo ..', todo);
    let index = todos.indexOf (todo );
    todos.splice(index,1);
  } 
    In this , is not going to work as react does not allow that .. TO do this i have to import the hooks .. ANd to use them i can visit.."REACT'S OFFICIAL SITE" */