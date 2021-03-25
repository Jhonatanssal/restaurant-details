import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Form(props) {
  // Saving back event
  let history = useHistory();

  return (
    <div className="text-center card shadow p-4">
      <h3>Add New Restaurant</h3>
      <form onSubmit={props.submitHandler} className="border p-4 text-left">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input onChange={props.inputHandler} value={props.restaurant.name} className="form-control" type="text" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea onChange={props.inputHandler} value={props.restaurant.description}  className="form-control" type="text" name="description"></textarea>
        </div>
        <button className="btn btn-success w-50" type="submit">Save</button>
        <button className="btn btn-secondary w-50" onClick={() => history.goBack()}>Back</button>
      </form>
    </div>
  )
}