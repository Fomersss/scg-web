import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Restaurant } from './pages/index'

// use higher order component to wrap component  with layout
import { withLayout } from './hoc/withLayout'

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={withLayout(Home)} />
        <Route exact path='/restaurant' component={withLayout(Restaurant)} />
      </Switch>
    )
  }
}

