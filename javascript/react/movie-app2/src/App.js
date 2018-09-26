
import {connect} from 'react-redux';
import MovieDisp from './components/MovieDisp';
import addToCart from './actions/addToCart';
import deleteFromCart from './actions/deleteFromCart';
import apiData from './actions/apiData';


function mapStateToProps(state){
  return{
    totalCost: state.totalCost,
    movieCart: state.movieCart,
    movieData: state.apiInfo
  }
}


function mapDispatchToProps(dispatch){
  return{
    onAddMovie: (movie) => dispatch(addToCart(movie)),
    onDeleteMovie: (movie) => dispatch(deleteFromCart(movie)),
    onFetch: (response) => dispatch(apiData(response))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDisp);

