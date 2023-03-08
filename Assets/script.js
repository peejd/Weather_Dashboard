// SET DOM REFS FOR BUTTONS AND SEARCH TEXT 
var btnCity = document.getElementById("btn-group");
var btnSearch = document.getElementById("btn-search");
var searchField = document.getElementById("search-text");

var todayCityDateEl = document.getElementById("today-city-date");
var todayIconEl = document.getElementById("today-icon");
var todayTempEl = document.getElementById("today-temp");
var todayWindEl = document.getElementById("today-wind");
var todayHumidEl = document.getElementById("today-humid");
var fiveDateEl1 = document.getElementById("1-date");
var fiveIconEl1 = document.getElementById("1-icon");
var fiveTempEl1 = document.getElementById("1-temp");
var fiveWindEl1 = document.getElementById("1-wind");
var fiveHumidEl1 = document.getElementById("1-humid");
var fiveDateEl2 = document.getElementById("2-date");
var fiveIconEl2 = document.getElementById("2-icon");
var fiveTempEl2 = document.getElementById("2-temp");
var fiveWindEl2 = document.getElementById("2-wind");
var fiveHumidEl2 = document.getElementById("2-humid");
var fiveDateEl3 = document.getElementById("3-date");
var fiveIconEl3 = document.getElementById("3-icon");
var fiveTempEl3 = document.getElementById("3-temp");
var fiveWindEl3 = document.getElementById("3-wind");
var fiveHumidEl3 = document.getElementById("3-humid");
var fiveDateEl4 = document.getElementById("4-date");
var fiveIconEl4 = document.getElementById("4-icon");
var fiveTempEl4 = document.getElementById("4-temp");
var fiveWindEl4 = document.getElementById("4-wind");
var fiveHumidEl4 = document.getElementById("4-humid");
var fiveDateEl5 = document.getElementById("5-date");
var fiveIconEl5 = document.getElementById("5-icon");
var fiveTempEl5 = document.getElementById("5-temp");
var fiveWindEl5 = document.getElementById("5-wind");
var fiveHumidEl5 = document.getElementById("5-humid");
var city = ""

// FUNCTION TO GET DATA FROM API, PARSE INTO VARIABLES, AND UPDATE DISPLAYED DATA
function getApi(event) {
    // SET SEARCH CITY AND FORMAT FOR API
    if (event.target.id == "btn-search"){
      console.log("hello");
      city = searchField.value;
    }
    else {
      city = event.target.textContent;
    }
    console.log(city);
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city.toLowerCase().replace(" ","+") + '&appid=2a2e6a64fa48349a7561c9ed9ecfdeee&units=imperial';
  
    // API CALL FOR 5-DAY FORECAST
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {

        console.log(data);
        // LATITUDE + LONGITUDE FOR GEOCODING API
        var lat = data.city.coord.lat;
        console.log("Lat = " + lat);
        var lon = data.city.coord.lon;
        console.log("Lon = " + lon);

        // 5-DAY +1 DATA
        var date1Raw = data.list[6].dt_txt.slice(0,10);
        var date1 = dayjs(date1Raw).format('M/DD/YYYY');
        // var icon1 = data.list[6].weather[0].id;
        var temp1 = data.list[6].main.temp + " F";
        var humid1 = data.list[6].main.humidity + "%";
        var wind1 = data.list[6].wind.speed + " MPH";

        // 5-DAY +2 DATA
        var date2Raw = data.list[14].dt_txt.slice(0,10);
        var date2 = dayjs(date2Raw).format('M/DD/YYYY');
        // var icon2 = data.list[14].weather[0].id;
        var temp2 = data.list[14].main.temp + " F";
        var humid2 = data.list[14].main.humidity + "%";
        var wind2 = data.list[14].wind.speed + " MPH";

        // 5-DAY +3 DATA
        var date3Raw = data.list[22].dt_txt.slice(0,10);
        var date3 = dayjs(date3Raw).format('M/DD/YYYY');
        // var icon3 = data.list[22].weather[0].id;
        var temp3 = data.list[22].main.temp + " F";
        var humid3 = data.list[22].main.humidity + "%";
        var wind3 = data.list[22].wind.speed + " MPH";

        // 5-DAY +4 DATA
        var date4Raw = data.list[30].dt_txt.slice(0,10);
        var date4 = dayjs(date4Raw).format('M/DD/YYYY');
        // var icon4 = data.list[30].weather[0].id;
        var temp4 = data.list[30].main.temp + " F";
        var humid4 = data.list[30].main.humidity + "%";
        var wind4 = data.list[30].wind.speed + " MPH";

        // 5-DAY +5 DATA
        var date5Raw = data.list[38].dt_txt.slice(0,10);
        var date5 = dayjs(date5Raw).format('M/DD/YYYY');
        // var icon5 = data.list[38].weather[0].id;
        var temp5 = data.list[38].main.temp + " F";
        var humid5 = data.list[38].main.humidity + "%";
        var wind5 = data.list[38].wind.speed + " MPH";

        fiveDateEl1.textContent = date1;
        fiveTempEl1.textContent = temp1;
        fiveWindEl1.textContent = wind1;
        fiveHumidEl1.textContent = humid1;

        fiveDateEl2.textContent = date2;
        fiveTempEl2.textContent = temp2;
        fiveWindEl2.textContent = wind2;
        fiveHumidEl2.textContent = humid2;

        fiveDateEl3.textContent = date3;
        fiveTempEl3.textContent = temp3;
        fiveWindEl3.textContent = wind3;
        fiveHumidEl3.textContent = humid3;

        fiveDateEl4.textContent = date4;
        fiveTempEl4.textContent = temp4;
        fiveWindEl4.textContent = wind4;
        fiveHumidEl4.textContent = humid4;

        fiveDateEl5.textContent = date5;
        fiveTempEl5.textContent = temp5;
        fiveWindEl5.textContent = wind5;
        fiveHumidEl5.textContent = humid5;

        var todayRequestUrl = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=2a2e6a64fa48349a7561c9ed9ecfdeee&units=imperial"
        
        // API CALL FOR TODAY'S WEATHER DATA
        fetch(todayRequestUrl)
        .then(function (response) {
        return response.json();
          })
        .then(function (data) {
          // SET VARIABLES FOR TODAY WEATHER DATA
          var todayCityDate = city.toUpperCase() + " - " + dayjs().format('M/DD/YYYY');
          var todayTemp = data.main.temp + " F";
          var todayWind = data.wind.speed + " MPH";
          var todayHumid = data.main.humidity + "%";
          // var todayIconCode = data.weather[0].id;

          // UPDATE DOM ELEMENTS WITH VALUES FROM API
          todayCityDateEl.textContent = todayCityDate;
          todayTempEl.textContent = todayTemp;
          todayWindEl.textContent = todayWind;
          todayHumidEl.textContent = todayHumid;
        });
    });
  };

// ADD EVENT LISTENERS
btnCity.addEventListener('click', getApi);
btnSearch.addEventListener('click', getApi);