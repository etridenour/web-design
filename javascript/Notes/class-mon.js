


// (function(){
//     var url = 'api.openweathermap.org/data/2.5/weather?q=Houston, Texas';

//     var apiKey = '066a1292fe434c04f22e4149542b4527';

//     var httpRequest = new XMLHttpRequest();

//     makeRequest();

//     function makeRequest(){

//         httpRequest.onreadystatechange = responseMethod()

//         httpRequest.open('GET', url + "&appid=" + apiKey, true);

//         httpRequest.send()
//     }

//     function responseMethod() {
//         if(httpRequest.readyState === 4 && httpRequest.status === 200) {
//             console.log(httpRequest.responseText);
//         } else {
//             console.log('failed')
//         }
//     }

// })() 

//self invoking function

var url = 'http://api.openweathermap.org/data/2.5/weather?q=Houston, Texas';

var apiKey = '066a1292fe434c04f22e4149542b4527';


$(function(){


    $.get(url, '&appid=' + apiKey)
    .done(function(response){
        console.log(response);
    })

    .fail(function(error){
        console.log(error);
    })
})

function getUrl(){
    document.addEventListener('button');
}