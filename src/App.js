import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Component } from 'react';
import Home from './components/Home'
import StarshipDetails from './components/StarshipDetails'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/starship" render={({location}) =>
            <StarshipDetails location={location}/>
        } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
