<!DOCTYPE html>
<html lang="en">
    <head>
      <?php include_once "assets/php/include.php"; ?>
    </head>
    <body>
      <div class="container text-center">
        <div class="row">
          <div class="col-md-12">
              <h1 class="header-text">Weather App</h1>
              <p class="error">This browser doesn't support geolocation.</p>
            </div>
          </div>
            <div class="row">
                <div class="col-md-12">
                  <h3 class="city"></h3>
                  <img class="flag">
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p class="temp"></p>
                <p class="temp fahrenheit" style="display: none"></p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <i class="wi"></i>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p class="weather-description"></p>
              </div>
              </div>
            <div class="row">
              <div class="col-md-12">
                <p class="made by">Made by: <a href="http://oskaryildiz.xyz" target="_blank">Oskar Yildiz</a></p>
              </div>
            </div>
        </div>
      <script src="assets/js/app.js"></script>
    </body>
</html>
