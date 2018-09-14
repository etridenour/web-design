import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {

    constructor(props){
        super(props);
        this.products = this.getProducts();
    }

    getProducts(){
        return 'https://loremflickr.com/g/320/240/paris'
    }
  render() {
      let productList = ['shoes', 'soap', 'chicken', 'taco'];

      let newProductList = productList.map((product) => {
            return <li key={product}>{product}</li>
      })
    return (
      <div className="Products">
        <ul>
            {newProductList}
        </ul>
       
      </div>
    );
  }
}

export default Products;
