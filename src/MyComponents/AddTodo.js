import React from 'react'
import { useState } from 'react';

const AddTodo = ({addTodo}) => {
  const [title, setTitle] = React.useState('');
  const [desc, setDesc] = React.useState("");

  const submit = (e)=>{
    e.preventDefault();
    if(!title||!desc){
      alert("Title or Description cannot be blank");
    }
    addTodo(title,desc);
  }

  return (
    <div className='container my-3'>
        <h3>Add a Todo</h3>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="title"/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" value={desc} id='description' onChange={(e)=>{setDesc(e.target.value)}}  className="form-control"/>
  </div>
  
  <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
</form>
    </div>
  )
}

export default AddTodo
