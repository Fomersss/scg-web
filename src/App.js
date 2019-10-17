import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Restaurant, FindValue } from './pages/index'
import { withLayout } from './hoc/withLayout'

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={withLayout(Home)} />
        <Route exact path='/restaurant' component={withLayout(Restaurant)} />
        <Route exact path='/findvalue' component={withLayout(FindValue)} />
      </Switch>
    )
  }
}

