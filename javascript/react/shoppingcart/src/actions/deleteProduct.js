
function deleteProduct(item){

    return {
        type: 'deleteProduct',
        productData: {
            productName: item.productName,
            productPrice: item.productPrice
        }
    }
}

export default deleteProduct;