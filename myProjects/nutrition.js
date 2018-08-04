//J Query Function
$(function() { 
    var returnArray = [];

    // Nutrition API url
    var listUrl = 'https://api.nal.usda.gov/ndb/search/?format=json&sort=r&max=100&offset=0&ds=Standard Reference&api_key='
    var apiKey = '6sv4apcjnrUpaeOI58SpDVB0mKbqUYpMnyLzOUK1';

    $('#searchButton').on('click', (e) => {
        
        e.preventDefault();

        returnArray = [];
        $('#browsers').remove('');

        var $name$ = $('#searchText').val();
        var $name = $name$.toLowerCase();
        // $name = $name.replace(/,/g, ' ');
        // console.log($name);

        $.get(listUrl + apiKey + '&q=' + $name)
        
        .done(function(response){
            console.log(response);

            response.list.item.forEach(function(e){
                let productName = e.name.toLowerCase();
                let wordCheck1 = productName.search($name);

                if(wordCheck1 >= 0){
                    // console.log(e.group)
                    if((e.group !== 'Baby Foods')){
                        returnArray.push(e);
                    }
                }   
            })
            let itemBar= $('<select>', {
                'id': 'browsers'
                });
            $('#list').append(itemBar);
            // console.log(returnArray);
            returnArray.forEach(function (e){
                // listName = e.name;
                let $printArray= $('<option>', {
                'text': e.name,
                'id': 'itemReturn'
                });
            $(itemBar).append($printArray);
            
            })
        })

        .fail(function(error) {
            console.log(error);
                
        });
    })

    $('#addButton').on('click', (e) => {
        console.log(returnArray);
        let $selected = $("#browsers").val();
        var $newIngr = $('<li>');
        $($newIngr).text($selected);
        $('#recipeList').append($newIngr);
        returnArray.forEach(function (e){
            if($selected === e.name){
                let foodID = e.ndbno;
                let idUrl = 'https://api.nal.usda.gov/ndb/reports/?type=b&format=json&api_key='
                $.get(idUrl + apiKey + '&ndbno=' + foodID)
                .done(function(response){
                    console.log(response);
                })
                .fail(function(error) {
                    console.log(error);
                        
                });
            }
        })

        //clearing input field
        $('#description').val('');
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