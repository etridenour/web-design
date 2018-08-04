//J Query Function
$(function() { 

    // Nutrition API url
    var listUrl = 'https://api.nal.usda.gov/ndb/search/?format=json&sort=r&max=100&offset=0&ds=Standard Reference&api_key='
    var apiKey = '6sv4apcjnrUpaeOI58SpDVB0mKbqUYpMnyLzOUK1';

    $('#searchButton').on('click', (e) => {
        
        e.preventDefault();

        var returnArray = [];
        $('#browsers').html('');

        var $name$ = $('#searchText').val();
        var $name = $name$.toLowerCase();

        $.get(listUrl + apiKey + '&q=' + $name)
        
        .done(function(response){
            console.log(response);

            response.list.item.forEach(function(e){
                let productName = e.name.toLowerCase();
                let wordCheck1 = productName.search($name);

                if(wordCheck1 >= 0){
                    if((e.group == 'Fruits and Fruit Juices') || (e.group == 'Dairy and Egg Products') || (e.group == 'Vegetables and Vegetable Products') || (e.group == 'Spices and Herbs') || (e.group == 'Beverages') || (e.group == 'Legumes and Legume Products') || (e.group == 'Sweets')){
                        returnArray.push(e);
                        
                    
                    }
                }
            })
            var itemBar= $('<select>', {
                'id': 'browsers'
                });
            $('#list').append(itemBar);
            console.log(returnArray);
            returnArray.forEach(function (e){
                // listName = e.name;
                let $printArray= $('<option>', {
                'text': e.name
                });
                $(itemBar).append($printArray);
            })
        })

        .fail(function(error) {
            // console.log(error);
                
        });
    })

// J Query function end  
})



//old done function with string length
// let words1 = 'raw'; 
// let words2 = 'fresh';
// let wordCheck2 = productName.search(words1);
// let wordCheck3 = productName.search(words2);

// .done(function(response){
//     console.log(response);
//     // returnArray.push(response.list.item);
//     // console.log(returnArray);
//     // returnArray.push(response.list.item);

//     response.list.item.forEach(function(e){
//         var returnArray = [];
//         let name = e.name.toLowerCase();
//         let name2 = name.search($name);

//         // console.log(inputName.length + 10);
//         if(name.length < ($name.length + 10) && (name2 >= 0)){
//             returnArray.push(e);
//             console.log(returnArray);
            
//         }
//     })
// })

// 'Dairy and Egg Products, Fruit and Fruit Juices, Vegetables and Vegetable Products, Spices and Herbs, Beverages, Legumes and Legume Products'