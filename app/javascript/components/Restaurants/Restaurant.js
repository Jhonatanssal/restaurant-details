import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from 'images/logo.png';

export default function Restaurant(props) {
  return (
    <div className="card col-10 col-md-3 m-1 shadow-sm p-3">
      <div className="d-flex align-items-center">
        <div className="restaurant-logo"><img className="restaurant-logo pr-3" src={logo} alt="Logo" /></div>
        <div className="restaurant-name">{props.attributes.name}</div>
      </div><hr />
      <div className="restaurant-description">{props.attributes.description}</div>
      <div className="restaurant-score p-2 my-2 bg-light">Score: {props.attributes.score}</div>
      <div className="restaurant-show">
        <Link className="btn btn-info" to={`/restaurants/${props.attributes.url}`}>View {props.attributes.name}</Link>
      </div>
    </div>
  )
}