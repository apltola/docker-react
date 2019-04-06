import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Fib from './Fib';
import About from './About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Fib} />        
          <Route exact path="/about" component={About} />        
        </div>
      </Router>
    );
  }
}

export default App;
