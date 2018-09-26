import React from 'react';
import MovieCart from './MovieCart';
import '../movieDisp.css';

class movieCart extends React.Component {
    constructor(props) {
        super(props);
       
    }

    componentWillMount(){
        fetch('http://www.omdbapi.com/?t=machete&apikey=dde6044e')
        .then(response => response.json())
        .then(response => this.props.onFetch(response))
        fetch('http://www.omdbapi.com/?t=office-space&apikey=dde6044e')
        .then(response => response.json())
        .then(response => this.props.onFetch(response))
        fetch('http://www.omdbapi.com/?t=tropic-thunder&apikey=dde6044e')
        .then(response => response.json())
        .then(response => this.props.onFetch(response))
        fetch('http://www.omdbapi.com/?t=batman&apikey=dde6044e')
        .then(response => response.json())
        .then(response => this.props.onFetch(response))
        fetch('http://www.omdbapi.com/?t=django&apikey=dde6044e')
        .then(response => response.json())
        .then(response => this.props.onFetch(response))
        fetch('http://www.omdbapi.com/?t=black-panther&apikey=dde6044e')
        .then(response => response.json())
        .then(response => this.props.onFetch(response))
        fetch('http://www.omdbapi.com/?t=naked-gun&apikey=dde6044e')
        .then(response => response.json())
        .then(response => this.props.onFetch(response))
        fetch('http://www.omdbapi.com/?t=trainspotting&apikey=dde6044e')
        .then(response => response.json())
        .then(response => this.props.onFetch(response))
        fetch('http://www.omdbapi.com/?t=district-9&apikey=dde6044e')
        .then(response => response.json())
        .then(response => this.props.onFetch(response))
        fetch('http://www.omdbapi.com/?t=what-about-bob&apikey=dde6044e')
        .then(response => response.json())
        .then(response => this.props.onFetch(response))
        
    }

    render() {
        return (
            <div>

                <h1>MOVIES</h1>

                <MovieCart totalCost={this.props.totalCost} movieCart={this.props.movieCart} deleteMovie={this.props.onDeleteMovie}/>

                <h3>Available Movies</h3>

                <div className = 'flexContainer'>

                {
                    this.props.movieData.map(movie => {
                        return <div key={movie.movieName} className='movieDisp' onClick={() => this.props.onAddMovie(movie)}>
                                    <h2>{movie.movieName}</h2>
                                    <img href='#'src={movie.moviePic}></img> 
                                    <h3>Rated: {movie.movieRate}</h3> <h3>${movie.moviePrice}</h3> 
                                    <h3>Genre: {movie.movieGenre}</h3>
                                    
                            </div>               
                    })
                }

                </div>


            </div>
        );
    }
}


export default movieCart
