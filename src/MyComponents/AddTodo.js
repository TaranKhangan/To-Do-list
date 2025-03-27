import React from 'react'

const AddTodo = () => {
  return (
    <div className='container my-3'>
        <h3>Add a Todo</h3>
      <form>
  <div class="mb-3">
    <label for="title" class="form-label">Title</label>
    <input type="text" class="form-control" id="title"/>
  </div>
  <div class="mb-3">
    <label for="description" class="form-label">Description</label>
    <input type="text" id='description' class="form-control"/>
  </div>
  
  <button type="submit" class="btn btn-success btn-sm">Add Todo</button>
</form>
    </div>
  )
}

export default AddTodo
