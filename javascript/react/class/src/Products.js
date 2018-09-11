import React, { Component } from 'react';
import Name from './Name';

class Products extends Component {
  render() {

    let message = "Cheese";
    let products = ['milk', 'oreos', 'shoes'];
    let listProducts = products.map(product=>{
        return <li key={product}>{product}</li>
    })
    return (
      <div>
          {this.props.name}
          <h1>{message}</h1>

          <Name />

        <ul>
            {listProducts}
        </ul>

      </div>
    );
  }
}

export default Products;
