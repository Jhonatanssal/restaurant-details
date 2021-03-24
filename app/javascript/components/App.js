import React from 'react';
import { Route, Switch } from 'react-router';
import Restaurants from './Restaurants/Restaurants'
import Restaurant from './Restaurant/Restaurant'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Restaurants} />
      <Route exact path="/restaurants/:url" component={Restaurant} />
    </Switch>
  )
}