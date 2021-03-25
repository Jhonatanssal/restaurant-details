import React from 'react';
import moment from 'moment';

export default function Review(props) {
  // Setting Variables
  const { user_name, description, score, created_at } = props.attributes;

  return (
    <div className="d-flex justify-content-center border-bottom">
      <div className="w-75 p-3">
        <div className="d-flex justify-content-between">
          <h5><b>User:</b> {user_name}</h5>
          <small><em>Created: {moment(created_at).format('DD/MM/YYYY')}</em></small>
        </div>
        <div className="info">
          <div>
            <span><b>Comment:</b> {description}</span>
          </div>
          <div>
            <span><b>Score:</b> {score}</span>
          </div>
        </div>
      </div>
    </div>
  )
}