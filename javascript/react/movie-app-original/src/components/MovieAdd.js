
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../MovieAdd.css';

class MovieAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieName: '',
            moviePic: '',
        }
    }

    handleMovieNameChange(e){
        this.setState({movieName: e.target.value});
    }

    handleMoviePicChange(e){
        this.setState({moviePic: e.target.value});
    }

    render() {
        return (
            <div className='flexContainer1'>
                <form className='addForm' noValidate autoComplete="off">
                    <TextField
                    id="outlined-name"
                    label="Movie"
                    value={this.state.movieName}
                    onChange={this.handleMovieNameChange.bind(this)}
                    
                    variant="outlined"
                    />

                    <TextField
                    id="outlined-pic"
                    label="Movie Poster URL"
                    value={this.state.moviePic}
                    onChange={this.handleMoviePicChange.bind(this)}
                    
                    variant="outlined"
                    />

                    <Button size='large' variant="contained" color="primary" onClick={() => 
                        
                        this.props.addMovie({
                            movieName: this.state.movieName,
                            moviePic: this.state.moviePic
                        })
                    }>Add Movie</Button>

                </form>
                

            </div>
        );
    }
}


export default MovieAdd
