import React from 'react';


class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            productPrice: 0,
            product: [{
                productName: 'Shoe',
                productPrice: 4
            }]
        }
        
    }
    productNameChangedHandler(e){
        this.setState({productName: e.target.value});
    }

    productPriceChangedHandler(e){
        this.setState({productPrice: e.target.value});
    }

    render() {
        return (
            <div>
                Add Product
                <input type='text'
                placeholder='Product Name'
                onChange={this.productNameChangedHandler.bind(this)}
                value={this.state.productName}/>

                <input type='text'
                placeholder='Product Price'
                onChange={this.productPriceChangedHandler.bind(this)}
                value={this.state.productPrice}/>

                <button
               
                onClick={() =>  this.props.addProduct({
                productName: this.state.productName,
                productPrice: this.state.productPrice
                })}>
                   Add Product
               </button>
                
            </div>
        );
    }
}


export default AddProduct
