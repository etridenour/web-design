import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Form />
      </div>
    );
  }
}

export default App;
