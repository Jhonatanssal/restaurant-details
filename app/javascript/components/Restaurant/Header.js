import React from 'react'
import logo1 from 'images/logo.png'

export default function Header(props) {
  const { name, description, score } = props.attributes;
  const reviews = props.reviews.length;

  return (
    <div>
      <div className="header d-md-flex justify-content-between align-items-center mt-2 p-3">
        <div className="d-md-flex align-items-center">
          <span className="logo">
            <img className="restaurant-logo mr-3" src={logo1} alt="Logo" />
          </span>
          <span>
            <h2>{name}</h2>
          </span>
        </div>
        <div className="score">
          <h5>Score: {score}</h5>
        </div>
      </div><hr />
      <div className="description text-center mt-3">
        <h5><b>Description:</b> {description}</h5>
      </div><hr />
      <div className="reviews">
        <h5>Reviews ({reviews}): </h5>
      </div>
    </div>
  )
}