
//Container

import {connect} from 'react-redux';
import MovieDisplay from './components/MovieDisplay';
import addMovie from './actions/addMovie';
import deleteMovie from './actions/deleteMovie';
import apiData from './actions/apiData';

function mapStateToProps(state){
  return {
    movieList: state.movieList,
    movieData: state.apiData
  }
}

function mapDispatchToProps(dispatch){
  return {
    onAddMovie: (movieData) => dispatch(addMovie(movieData)),
    onDeleteMovie: (movieData) => dispatch(deleteMovie(movieData)),
    onFetch: (response) => dispatch(apiData(response))
  }
}

var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDisplay);

export default connectedComponent