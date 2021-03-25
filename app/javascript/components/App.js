import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';
import Restaurants from './Restaurants/Restaurants'
import NewRestaurant from './Restaurants/NewRestaurant'
import Restaurant from './Restaurant/Restaurant'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

export default function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Restaurants} />
        <Route exact path="/restaurants/:url" component={Restaurant} />
        <Route exact path="/new-restaurant" component={NewRestaurant} />
      </Switch>
      <Footer />
    </Fragment>
  )
}