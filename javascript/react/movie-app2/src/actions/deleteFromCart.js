
function deleteFromCart(movie){
    
    return{
        type: 'deleteFromCart',
        movieData: movie
    }
}

export default deleteFromCart