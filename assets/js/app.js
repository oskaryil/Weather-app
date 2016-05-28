/*
---------------------AUTHOR---------------------
---------------------OSKAR YILDIZ---------------
http://oskaryildiz.xyz
------------------------------------------------
*/

$(document).ready(function() {
  /*
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };*/


  function celsiusToFahrenheit(celsius) { // This function converts the temperature in unit celsuis to fahrenheit.
    var fahrenheit = celsius * 1.8 + 32;
    roundedFahrenheit = Math.round(fahrenheit);
    return roundedFahrenheit;
  }
  /*
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        positionLat = position.coords.latitude;
        positionLong = position.coords.longitude;

        $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + positionLat + "35&lon=" + positionLong + "&units=metric" + "&APPID=931c6d7de465d9508cd249f5eb74b3ae", function(json) {
          var html = "";

          var keys = Object.keys(json);

          keys.forEach(function(key) {
            html += "<b>" + key +"</b>" + "<br>";
          });
          console.log(json);
          var countryCodeRaw = json.sys.country;
          var countryCode = countryCodeRaw.toLowerCase();
          var countryFlag = "http://www.geonames.org/flags/x/"+ countryCode + ".gif";
          var weatherDescription = json.weather[0].main;

          $(".city").html(json.name + ", " + json.sys.country);
          $(".flag").attr("src", countryFlag);
          $(".temp").html(json.main.temp + "<span class='deg'>&deg;C</span>");
          $(".fahrenheit").html(celsiusToFahrenheit(json.main.temp) + "<span class='deg'>&deg;F</span>");
          $(".deg").click(function() {
            $(".temp").toggle();
          });
          $("i").addClass("wi-owm-"+json.weather[0].id);
          $(".weather-description").html(weatherDescription);

          console.log(html);
          console.log("");

          console.log(countryFlag);
          console.log(weatherDescription);

        });


      }, null, options);
    } else {
      console.log("This browser doesn't support geolocation");
      $(".error").css("visibility", "visible");

    }*/


  var city; // This variable stores the city name.
  var countrycode; // Stores the countrycode that it gets from the IP GEO API.
  $.getJSON("http://ip-api.com/json", function(json) { // Makes an API call to IP-API.com and gets the output as JSON.
    city = json.city;
    countrycode = json.countryCode;
    console.log("Country code: ", countrycode);
    console.log("City: ", city);

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + countrycode + "&units=metric" + "&APPID=931c6d7de465d9508cd249f5eb74b3ae", function(json) { // Makes a json api call to Openweathermap with an apikey.
      var html = "";

      var keys = Object.keys(json); // Gets the keys of the json opw object.

      keys.forEach(function(key) { // Loops through the keys and stores each key in the html variable.
        html += "<b>" + key + "</b>" + "<br>";
      });
      console.log(json); // Logs the json object for debugging.
      var countryCodeRaw = json.sys.country; // Gets the countryCode from the json object.
      var countryCode = countryCodeRaw.toLowerCase(); // Takes the countrycode and turns it into Lowercase.
      var countryFlag = "http://www.geonames.org/flags/x/" + countryCode + ".gif"; // Gets the appropriate flag based on the countrycode gotten from Openweathermap.
      var weatherDescription = json.weather[0].main; // Gets the weather description and stores it.


      console.log("Country: " + json.sys.country);
      $(".city").html(json.name + ", " + json.sys.country); // Sets the city in the html.
      $(".flag").attr("src", countryFlag); // Sets the flag image.
      $(".temp").html(json.main.temp + "<span class='deg'>&deg;C</span>"); // Sets the temperature in html.
      $(".fahrenheit").html(celsiusToFahrenheit(json.main.temp) + "<span class='deg'>&deg;F</span>"); // Sets the fahrenheit.
      $(".deg").click(function() { // Makes the user able to switch between celsius and fahrenheit.
        $(".temp").toggle();
      });
      $("i").addClass("wi-owm-" + json.weather[0].id); // Sets the weather icon.
      $(".weather-description").html(weatherDescription); // Adds the weather description that it got earlier to html.

      console.log(html); // DEBUGGNING -
      console.log("");
      console.log(weatherDescription); // - END OF DEBUGING

    });
  });

  console.log("It works!");

});
