import React from 'react';
import Button from '@material-ui/core/Button';
import '../MovieCart.css'

class addMovie extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            movieName: "",
            moviePrice: 0
        }
    }




    render() {
        var cart = [];
        if(this.props.movieCart !== undefined){
            if(this.props.movieCart.length > 0){
                cart = this.props.movieCart.map(movie => {
                    return  <div key={movie.movieName}>
                                <div>{movie.movieName}</div>
                                <Button className='removeButton' size='small' color='secondary' variant="contained" onClick={() => 
                                    this.props.deleteMovie(movie)}>Remove</Button>
                    
                            </div>
                })
            }
        }
        return (
            <div className='MovieCart'>
                <h3>Total Cost: ${this.props.totalCost}</h3>
                {cart}
                
            </div>
        );
    }
}


export default addMovie


