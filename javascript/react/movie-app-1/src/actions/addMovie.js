
function addMovie(movie){
    
    return {
        type: 'addMovie',
        movieData: {
            movieName: movie.movieName,
            moviePic: movie.moviePic
        }
    }
}

export default addMovie;