


function movieReducer(state, action){

    if(state === undefined) {
        console.log("initial state")
        return {
            totalCost: 0,
            apiInfo: [],
            movieCart: []
        }
    }

    switch(action.type){
        case 'addToCart':
            return{
                ...state,
                totalCost: state.totalCost + parseInt(action.movieData.moviePrice),
                movieCart: state.movieCart.concat({
                    movieName: action.movieData.movieName,
                    moviePrice: action.movieData.moviePrice
                })
            }

        case 'deleteFromCart':
            const updatedArray = state.movieCart.filter(movie => {
                return (movie.movieName !== action.movieData.movieName);
            })
            return{
                ...state,
                totalCost: state.totalCost - parseInt(action.movieData.moviePrice),
                movieCart: updatedArray

            }
        
        case 'apiFetchData':
            {
                return{
                ...state,
                apiInfo: state.apiInfo.concat({
                    movieName: action.payload.Title,
                    moviePic: action.payload.Poster,
                    movieRate: action.payload.Rated,
                    movieGenre: action.payload.Genre,
                    moviePrice: 12
                })
                

            }
        }

        default:
            return state;

    }
}

export default movieReducer

