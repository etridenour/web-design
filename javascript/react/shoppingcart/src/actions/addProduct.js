
function addProduct(item){

    return {
        type: 'addProduct',
        productData: {
            productName: item.productName,
            productPrice: item.productPrice
        }
    }
}

export default addProduct;