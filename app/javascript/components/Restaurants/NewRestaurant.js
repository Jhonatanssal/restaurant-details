import React, { useState } from 'react'
import axios from 'axios'
import Form from './Form'

export default function NewRestaurant() {
  // API Variables
  const [restaurant, setRestaurant] = useState({});

  // Handlers for form inputs and submit
  const inputHandler = (e) => {
    e.preventDefault();

    // Set Review object before submit
    setRestaurant(Object.assign({...restaurant, [e.target.name]: e.target.value}));
  }

  const submitHandler = (e) => {
    e.preventDefault();

    // Update CSRF Token
    const csrfT = document.querySelector('[name=csrf-token]').content;
    axios.defaults.headers.common['C-CSRF-TOKEN'] = csrfT;

    // API POST method to submit new restaurant
    axios.post('/api/v1/restaurants', { restaurant })
      .then(resp => {
        setRestaurant({name: '', description: ''});
      })
      .catch(resp => {})
  }
  return (
    <div className="w-100 d-flex justify-content-center my-3">
      <Form 
        inputHandler={inputHandler}
        submitHandler={submitHandler}
        restaurant={restaurant}
      />
    </div>
  )
}