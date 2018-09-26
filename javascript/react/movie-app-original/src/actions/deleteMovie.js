
function deleteMovie(movie) {

    return {
        type: 'deleteMovie',
        movieData: {
            movieName: movie.movieName,
            moviePic: movie.moviePic
        }
    }
}

export default deleteMovie;