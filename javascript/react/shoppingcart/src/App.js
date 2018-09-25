
//Container

import {connect} from 'react-redux';
import Cart from './components/Cart';
import addProduct from './actions/addProduct';
import deleteProduct from './actions/deleteProduct';

function mapStateToProps(state){
  return{
    totalCost: state.totalCost,
    productCart: state.productCart
  }
}

function mapDispatchToProps(dispatch){
  return{

    //define action event to be used later
    onAddProduct: (productData) => dispatch(addProduct(productData)),
    onDeleteProduct: (productData) => dispatch(deleteProduct(productData))
  }
}

var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

export default connectedComponent


