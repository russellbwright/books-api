import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home/Home'
import Single from './Single/Single'


import '../App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Home} />
          <Route path='/api/:single_name' component={Single} />
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
