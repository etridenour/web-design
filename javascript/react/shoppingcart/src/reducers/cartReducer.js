
function cartReducer(state, action){

    if(state === undefined){
        return{
            totalCost: 0,
            productCart: [
                {
                    productName: 'Sauerkraut',
                    productPrice: 2
                }
            ]
        };
    }

    switch(action.type){
        case 'addProduct':
            return{
                ...state,
                totalCost: state.totalCost + parseInt(action.productData.productPrice),
                productCart: state.productCart.concat({
                    productName: action.productData.productName,
                    productPrice: action.productData.prodcutPrice
                })
        }

        case 'DeleteProduct':

            const updatedArray = state.productCart.filter(product => {
                return product.productName !== action.productData.productName 
            })

            return {
                ...state,
                totalCost: state.totalCost - parseInt(action.productData.productPrice),
                productCart: updatedArray
        }

        default:
        return (state)
    }

}

export default cartReducer;