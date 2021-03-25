import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import Form from './Form'
import Review from './Review'

export default function Restaurant(props) {
  // Set restaurant response
  const [restaurant, setRestaurant] = useState({});

  // Set boolean to check is response is succesful
  const [bool, setBool] = useState(false);

  // Set reviews list
  const [review, setReview] = useState({});

  // API request
  useEffect(() => {
    const url = props.match.params.url;
    const apiUrl = `/api/v1/restaurants/${url}`;

    // API call to GET each Restaurant
    axios.get(apiUrl)
      .then(resp => {
        setRestaurant(resp.data)
        setBool(true)
      })
      .catch(resp => console.log(resp))
  }, []);

  // Handlers for form inputs and submit
  const inputHandler = (e) => {
    e.preventDefault();

    // Set Review object before submit
    setReview(Object.assign({...review, [e.target.name]: e.target.value}));
  }

  const submitHandler = (e) => {
    e.preventDefault();

    // Update CSRF Token
    const csrfT = document.querySelector('[name=csrf-token]').content;
    axios.defaults.headers.common['C-CSRF-TOKEN'] = csrfT;

    // Storing restaurant id
    const restaurant_id = restaurant.data.id;

    // API POST method to submit reviews
    axios.post('/api/v1/reviews', { review, restaurant_id })
      .then(resp => {
        const reviews = [...restaurant.included, resp.data.data];
        setRestaurant({...restaurant, reviews});
        setReview({user_name: '', description: '', score: ''});
      })
      .catch(resp => {})
  }

  // Update reviews
  let reviews;
  if (bool && restaurant.included) {
    reviews = restaurant.included.map( (item, index) => {
      return (
        <Review
          attributes={item.attributes}
          key={index}
        />
      )
    })
  }

  return (
    <div className="d-flex justify-content-center w-md-100">
      {/* Check if API request is succesful to avoid errors */}
      { 
        bool && 
        <div className="w-75 border p-3 m-3 shadow rounded">
          <Header
            attributes={restaurant.data.attributes}
            reviews={restaurant.included}
          />
          {reviews}
          <Form 
            inputHandler={inputHandler}
            submitHandler={submitHandler}
            attributes={restaurant.data.attributes}
            review={review}
          />
        </div>
      }
    </div>
  )
}