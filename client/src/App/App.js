import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HelloWorld from './pages/HelloWorld';
import Users from './pages/Users';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={HelloWorld}/>
          <Route exact path='/users' component={Users}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
