import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Restaurant from './Restaurant';

export default function Restaurants() {

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Calls API to GET all Restaurants
    axios.get('api/v1/restaurants.json')
      .then(response => setRestaurants(response.data.data))
      .catch( resp => console.log(resp) )
  }, [restaurants.length]);

  const cards = restaurants.map(item => {
    return (
      <Restaurant key={item.attributes.name} attributes={item.attributes}>
        {item.attributes.name}
      </Restaurant>
    )
  })

  return (
    <div className="home-page d-flex justify-content-center w-100 mx-auto">
      <div className="w-75 text-center">
        <div className="mt-2 text-center">
          <h1>Restaurants</h1>
          <p>Share your experience on these restaurants. <br />
          Please submit a review on the one you know.</p>
        </div>
        <div className="my-3 row row-cols-1 row-cols-sm-3 row-cols-md-4 justify-content-center">
          {cards}
        </div>
      </div>
    </div>
  )
}