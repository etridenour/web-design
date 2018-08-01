$(function() {  


	var url = "http://api.openweathermap.org/data/2.5/weather?q=";
	var apiKey = "066a1292fe434c04f22e4149542b4527"; 

    $('#submitButton').on('click', (e) => {
        
        e.preventDefault();

        var $city = $('#cityInput').val();
        

        $.get(url + $city + '&appid=' + apiKey)
        .done(function(response) {

            // console.log(response);
            updateUISuccess(response)
            
        })
        .fail(function(error) {
            console.log(error);
            
            updateUIError()
                
        });

        //handle XHR success
        function updateUISuccess(response) {

            var $cityDisp = $('#cityDisp');
            console.log($cityDisp);
            $cityDisp.html($city);
         

            var condition = response.weather[0].main;
            // console.log(condition);
            
            var degC = response.main.temp - 273.15;

            // console.log(degC);
            
            var degCInt = Math.floor(degC);
            
            // console.log(degCInt);

            var degF = degC * 1.8 + 32;
            
            // console.log(degF);
            var degFInt = Math.floor(degF);
            // console.log(degFInt);
            
            var weatherBox = document.getElementById("weatherDisp");
            weatherBox.innerHTML = '<p>' + degFInt + "&#176; F</p><p>" + condition + "</p>";

            var currentTime = new Date().getHours();
            console.log(currentTime);
            var $weatherPic = $('#weatherPic');

            if (0 <= currentTime&&currentTime < 7) {
                if(condition === 'Clear' ){
                    $weatherPic.attr('src','images/clear.png');
                    
                } else if(condition === 'Clouds' ){
                    $weatherPic.attr('src','images/cloudy.png');
                // } else if (condition === 'scattered clouds' || 'broken clouds'){
                //     var $clearSky = $('<img>', {
                //         src: 'images/cloudy.png',
                //         id: 'graphic'
                //     });
                // } else if (condition === 'shower rain' ){
                //     var $clearSky = $('<img>', {
                //         src: 'images/rain.png',
                //         id: 'graphic'
                //     });
                } else if(condition === 'Rain' ){
                    $weatherPic.attr('src','images/night-rain.png');

                } else if(condition === 'Thunderstorm' ){
                    $weatherPic.attr('src','images/thunderstorm.png');

                } else if(condition === 'Snow' ){
                    $weatherPic.attr('src','images/snow.png');

                } else if(condition === 'Mist' ){
                    $weatherPic.attr('src','images/mist.png');

                } else {
                    var $clearSky = $('<img>', {
                        src: '',
                        id: 'graphic'
                    });
                }
                    
            } else if (7 <= currentTime&&currentTime < 20) {

                if(condition === 'Clear' ){
                    $weatherPic.attr('src','images/day-clear.png');

                } else if(condition === 'Clouds' ){
                    $weatherPic.attr('src','images/cloudy.png');

                } else if(condition === 'Rain' ){
                    $weatherPic.attr('src','images/day-rain.png');

                } else if(condition === 'Thunderstorm' ){
                    $weatherPic.attr('src','images/thunderstorm.png');

                } else if(condition === 'Snow' ){
                    $weatherPic.attr('src','images/snow.png');

                } else if(condition === 'Mist' ){
                    $weatherPic.attr('src','images/mist.png');

                } else {
                    var $clearSky = $('<img>', {
                        src: '',
                        id: 'graphic'
                    });
                }

            } else if (20 <= currentTime&&currentTime < 24) {
                if(condition === 'Clear' ){
                    $weatherPic.attr('src','images/clear.png');

                } else if(condition === 'Clouds' ){
                    $weatherPic.attr('src','images/cloudy.png');
                // } else if (condition === 'scattered clouds' || 'broken clouds'){
                //     var $clearSky = $('<img>', {
                //         src: 'images/cloudy.png',
                //         id: 'graphic'
                //     });
                // } else if (condition === 'shower rain' ){
                //     var $clearSky = $('<img>', {
                //         src: 'images/rain.png',
                //         id: 'graphic'
                //     });
                } else if(condition === 'Rain' ){
                    $weatherPic.attr('src','images/night-rain.png');

                } else if(condition === 'Thunderstorm' ){
                    $weatherPic.attr('src','images/thunderstorm.png');

                } else if(condition === 'Snow' ){
                    $weatherPic.attr('src','images/snow.png');

                } else if(condition === 'Mist' ){
                    $weatherPic.attr('src','images/mist.png');

                } else {
                    $weatherPic.attr('src','');
                }
            }
            $('#graphic').append($clearSky);
        }

        // handle XHR error
        function updateUIError() {
    //		var weatherBox = document.getElementById("weather");
    //		weatherBox.className = "hidden";
            var $weatherBox = $('#weatherDisp');
            $weatherBox.addClass('hidden');
        }

    })
});


// var currentTime = new Date().getHours();
// if (0 <= currentTime&&currentTime < 7) {
//  document.write("<link rel='stylesheet' href='night.css' type='text/css'>");
// }
// if (7 <= currentTime&&currentTime < 20) {
//  document.write("<link rel='stylesheet' href='morning.css' type='text/css'>");
// }
// if (20 <= currentTime&&currentTime < 24) {
//  document.write("<link rel='stylesheet' href='day.css' type='text/css'>");
// }