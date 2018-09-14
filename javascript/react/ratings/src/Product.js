import React, { Component } from 'react';
import {Media} from 'react-bootstrap';

class Product extends Component {
  render() {
    return (
      <div className="Product">
       
        <Media>
            <Media.Left>
                <img />
            </Media.Left>
            <Media.Body>
                <Media.Heading>Media Heading</Media.Heading>
            </Media.Body>

        </Media>

      </div>
    );
  }
}

export default Product;
