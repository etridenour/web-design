// $(function(){

//     var url = 'http://api.walmartlabs.com/v1/search?apiKey=f8e5saau469abpfy4gzvqwvn&categoryId=976759_1071964_976793&query='
  
//     $('#searchButton').on('click', (e) => {
      
//         var searchInput = $('#searchText').val();

//         e.preventDefault();

//         $.get(url + searchInput)
//         .done(function(response){
            
//             // console.log(response);
//         })
//         .fail(function(error) {
//             // console.log(error);
                
//         });
//     });

//     $.get('http://api.walmartlabs.com/v1/taxonomy?apiKey=f8e5saau469abpfy4gzvqwvn')
//         .done(function(response){
            
//         // console.log(response);
//     })

//     $.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=shot')
//         .done(function(response){
            
//         console.log(response);
//     })
// });
let $name = 'garlic';
let productName = 'garlic, raw';
let words = 'raw'; 
let words1 = 'fresh';
let wordCheck1 = productName.search($name);
let wordCheck2 = productName.search(words);
let wordCheck3 = productName.search(words1);

console.log(wordCheck1);
console.log(wordCheck2);
console.log(wordCheck3);