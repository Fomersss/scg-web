import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, CurriculumVitae } from './pages/index'

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cv' component={CurriculumVitae} />
      </Switch>
    )
  }
}

