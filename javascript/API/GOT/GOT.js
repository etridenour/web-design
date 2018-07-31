$(function(){

    // column 1
    $.get('https://www.anapioficeandfire.com/api/houses?page=1&pageSize=28')
    .done(function(response){
        got1(response);
        console.log(response);
    })
    .fail(function(error) {
        console.log(error);
            
    });

    // column 2
    $.get('https://www.anapioficeandfire.com/api/houses?page=2&pageSize=28')
    .done(function(response){
        got2(response);
    })
    .fail(function(error) {
        console.log(error);
            
    });

    // column 3
    $.get('https://www.anapioficeandfire.com/api/houses?page=3&pageSize=28')
    .done(function(response){
        got3(response);
    })
    .fail(function(error) {
        console.log(error);
            
    });

    // column 4
    $.get('https://www.anapioficeandfire.com/api/houses?page=4&pageSize=28')
    .done(function(response){
        got4(response);
    })
    .fail(function(error) {
        console.log(error);
            
    });

    // House Info

    $('#submitButton').on('click', (e) => {

    })

    function got1(input) {
        input.forEach(function(input){
            let houses = input.name;

            let $printHouses= $('<a>', {
                'text': houses,
                'href': '#',
                 click: function () { dispHouseInfo(input); }
            });
            // ($printHouses).text(houses);
            $('#c1').append($printHouses);

            let $br = $('<br>');
            $('#c1').append($br);
        })

    }

    function got2(input) {
        input.forEach(function(input){
            let houses = input.name;

            let $printHouses= $('<a>', {
                'text': houses,
                'href': '#',
                 click: function () { dispHouseInfo(input); }
            });
            // ($printHouses).text(houses);
            $('#c2').append($printHouses);

            let $br = $('<br>');
            $('#c2').append($br);
        })

    }

    function got3(input) {
        input.forEach(function(input){
            let houses = input.name;

            let $printHouses= $('<a>', {
                'text': houses,
                'href': '#',
                 click: function () { dispHouseInfo(input); }
            });
            // ($printHouses).text(houses);
            $('#c3').append($printHouses);

            let $br = $('<br>');
            $('#c3').append($br);
        })

    }

    function got4(input) {
        input.forEach(function(input){
            let houses = input.name;

            let $printHouses= $('<a>', {
                'text': houses,
                'href': '#',
                 click: function () { dispHouseInfo(input); }
            });
            // ($printHouses).text(houses);
            $('#c4').append($printHouses);

            let $br = $('<br>');
            $('#c4').append($br);
        })
    }

    function dispHouseInfo(input){

            let hName = input.name;
            let hRegion = input.region;
            let hCOA = input.coatOfArms;
            let hWords = input.words;

            console.log(`House Name: ${hName}
            Region: ${hRegion}
            Coat of Arms: ${hCOA}
            Words: ${hWords}`);

            var houseInfoP = document.getElementById('houseInfoP');
            houseInfoP.innerHTML = `<p>House Name: ${hName}
                <br>
                <br>
                Region: ${hRegion}
                <br>
                <br>
                Coat of Arms: ${hCOA}
                <br>
                <br>
                Words: ${hWords}</p>`;
    }
})


var $houseInfo = $('#houseInfo');
$houseInfo.text(`House Name: ${hName}
    Region: ${hRegion}
    Coat of Arms: ${hCOA}
    Words: ${hWords}`);
