
import React from 'react';
import MovieAdd from './MovieAdd';
import Button from '@material-ui/core/Button';
import '../MovieDisplay.css';


class movieDisplay extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentWillMount(){
        fetch('http://www.omdbapi.com/?s=batman&apikey=dde6044e')
        .then(response => response.json())
        .then(response => this.props.onFetch(response))
        .then(response => console.log(response))
    }



    render() {
        return (
            <div className='wholeThing'>

                <h1>Movies</h1>

                <MovieAdd addMovie={this.props.onAddMovie} />

                <div className='flexContainer'>

                {
                    this.props.movieList.map(movieData => {
                        return <div key={movieData.movieName} className='movieDisp'>
                                    <h2 className='movieTitle'>{movieData.movieName}</h2>
                                    <img className='moviePic'src={movieData.moviePic} alt='moviePic'></img>
                                    <br></br>
                                    <Button className='removeButton' size='small' color='secondary' variant="contained" onClick={() => {
                                        this.props.onDeleteMovie(movieData)
                                    }}>X</Button>
                               </div>
                            
                    })
                }
                
                </div>


            </div>
        );
    }
}


export default movieDisplay

