import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import VenuesList from './pages/venues-list'
import Venue from './pages/venue-show'
import Profile from './pages/profile'

const App = function(props) {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profiles/:id" component={Profile} />
          <Route path="/venues/:id" component={Venue} />
          <Route path="/venues" component={VenuesList} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
