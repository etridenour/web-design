$(function(){

    // column 1
    $.get('https://www.anapioficeandfire.com/api/houses?page=1&pageSize=20')
    .done(function(response){
        console.log(response);
        got1(response);
    })
    .fail(function(error) {
        console.log(error);
            
    });

    // column 2
    $.get('https://www.anapioficeandfire.com/api/houses?page=1&pageSize=20')
    .done(function(response){
        console.log(response);
        got2(response);
    })
    .fail(function(error) {
        console.log(error);
            
    });

    // column 3
    $.get('https://www.anapioficeandfire.com/api/houses?page=1&pageSize=20')
    .done(function(response){
        console.log(response);
        got3(response);
    })
    .fail(function(error) {
        console.log(error);
            
    });

    // column 4
    $.get('https://www.anapioficeandfire.com/api/houses?page=1&pageSize=20')
    .done(function(response){
        console.log(response);
        got4(response);
    })
    .fail(function(error) {
        console.log(error);
            
    });

    function got1(input) {
        input.forEach(function(input){
            let houses = input.name;
            console.log(houses);

            let $printHouses= $('<button>', {
                'text': houses,
                 click: function () { alert('hi'); }
            });
            ($printHouses).text(houses);
            $('#c1').append($printHouses);

            let $br = $('<br>');
            $('#c1').append($br);
        })

    }

    function got2(input) {
        input.forEach(function(input){
            let houses = input.name;
            console.log(houses);

            let $printHouses= $('<button>', {
                'text': houses,
                'class': ''
            });
            ($printHouses).text(houses);
            $('#c2').append($printHouses);

            let $br = $('<br>');
            $('#c2').append($br);
        })

    }

    function got3(input) {
        input.forEach(function(input){
            let houses = input.name;
            console.log(houses);

            let $printHouses= $('<button>', {
                'text': houses,
                'class': ''
            });
            ($printHouses).text(houses);
            $('#c3').append($printHouses);

            let $br = $('<br>');
            $('#c3').append($br);
        })

    }

    function got4(input) {
        input.forEach(function(input){
            let houses = input.name;
            console.log(houses);

            let $printHouses= $('<button>', {
                'text': houses,
                'class': ''
            });
            ($printHouses).text(houses);
            $('#c4').append($printHouses);

            let $br = $('<br>');
            $('#c4').append($br);
        })

    }
})
