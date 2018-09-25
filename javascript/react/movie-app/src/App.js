
//Container

import {connect} from 'react-redux';
import MovieDisplay from './components/MovieDisplay';
import addMovie from './actions/addMovie';
import deleteMovie from './actions/deleteMovie';

function mapStateToProps(state){
  return {
    movieList: state.movieList
  }
}

function mapDispatchToProps(dispatch){
  return {
    onAddMovie: (movieData) => dispatch(addMovie(movieData)),
    onDeleteMovie: (movieData) => dispatch(deleteMovie(movieData))
  }
}

var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDisplay);

export default connectedComponent