import React from 'react'

export default function Form(props) {
  return (
    <div className="review-form border p-3 rounded shadow-sm mt-3">
      <form onSubmit={props.submitHandler}>
        <div className="text-center">
          <h5><em>Share your opinion!</em></h5>
        </div>
        <div className="form-group">
          <label htmlFor="user_name">Name:</label>
          <input onChange={props.inputHandler} value={props.review.user_name} className="form-control" type="text" name="user_name" placeholder="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Review:</label>
          <textarea onChange={props.inputHandler} value={props.review.description}  className="form-control" type="textarea" name="description" placeholder="Share your experience..."></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="score">Rate:</label>
          <select onChange={props.inputHandler} value={props.review.score}  className="form-control" name="score" id="rating">
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button className="btn btn-success" type="submit">Submit</button>
      </form>
    </div>
  )
}