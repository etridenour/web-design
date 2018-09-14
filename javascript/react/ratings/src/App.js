import React, { Component } from 'react';
import Products from './Products';
import {Button} from 'react-bootstrap';
import Rating from './Rating';

class App extends Component {
  render() {
    return (
      <div className="App">
    
       <Products />

      <Rating rating='1'/>
      <Rating rating='2'/>
      <Rating rating='3'/>
      <Rating rating='4'/>
      <Rating rating='5'/>
       {/* <Button bsStyle='danger'>Big ass button</Button> */}
      </div>
    );
  }
}

export default App;
