import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, CurriculumVitae } from './pages/index'
import {withLayout} from './hoc/withLayout'

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={withLayout(Home)} />
        <Route exact path='/cv' component={CurriculumVitae} />
      </Switch>
    )
  }
}

