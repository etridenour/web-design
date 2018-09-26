
const movieListArray = [{
    movieName: 'Fight Club',
    moviePic: 'https://m.media-amazon.com/images/M/MV5BMjJmYTNkNmItYjYyZC00MGUxLWJhNWMtZDY4Nzc1MDAwMzU5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
},
{
    movieName: 'Forrest Gump',
    moviePic: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR1,0,182,268_AL_.jpg'
},
{
    movieName: 'Black Panther',
    moviePic: 'https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg'
},
{
    movieName: 'Django',
    moviePic: 'https://vignette.wikia.nocookie.net/djangounchained/images/3/38/Fan_made_poster_4.jpeg/revision/latest?cb=20121127055747'
}]

const initial_state = {

    movieList: movieListArray

}

function movieReducer(state = initial_state, action){
    
    // if(state === undefined){
    //     return{
    //         movieList: [
    //             {
    //                 movieName: 'No movies',
    //                 moviePic: 'https://www.joomlaforce.com/wp-content/uploads/2017/02/coming-soon-page-builder.png'
    //             }
    //         ]
    //     };
    // }

    switch(action.type){
        case 'addMovie':
            return{
                ...state,
                movieList: state.movieList.concat({
                    movieName: action.movieData.movieName,
                    moviePic: action.movieData.moviePic
                })
            }

        case 'deleteMovie':
            
            const updateArray = state.movieList.filter(movie => {
                return movie.movieName !== action.movieData.movieName
            })

            return{
                ...state,
                movieList: updateArray
            }
        
        case 'apiFetchData':

            return{
                ...state,
                apiInfo: action.payload
            }

        default:
            return (state);

    }

}

export default movieReducer;