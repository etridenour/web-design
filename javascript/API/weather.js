$(function() {  


	var url = "http://api.openweathermap.org/data/2.5/weather?q=";
	var apiKey = "066a1292fe434c04f22e4149542b4527"; 

    $('#submitButton').on('click', (e) => {
        var $city = $('#cityInput').val();
        e.preventDefault();

        $.get(url + $city + '&appid=' + apiKey)
        .done(function(response) {

            console.log(response);
            updateUISuccess(response)
            
        })
        .fail(function(error) {
            console.log(error);
            
            updateUIError()
                
        });

        //handle XHR success
        function updateUISuccess(response) {

            var condition = response.weather[0].main;
            console.log(condition);
            
            var degC = response.main.temp - 273.15;

            console.log(degC);
            
            var degCInt = Math.floor(degC);
            
            console.log(degCInt);

            var degF = degC * 1.8 + 32;
            
            console.log(degF);
            var degFInt = Math.floor(degF);
            console.log(degFInt);
            
            var weatherBox = document.getElementById("weatherDisp");
            weatherBox.innerHTML = '<p>' + degFInt + "&#176; F</p><p>" + condition + "</p>";
           
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