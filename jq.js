//api.openweathermap.org/data/2.5/weather?q={city name},{state}&appid=0667029354c22542ea4630c17a0785dc
var api = "https://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "&appid=0667029354c22542ea4630c17a0785dc";
var units = "&units=imperial"



var api5 = "https://api.openweathermap.org/data/2.5/forecast?q=";
var apiKey5 = "&appid=0667029354c22542ea4630c17a0785dc";
var units5 = "&units=imperial"

var apiUV = "https://api.openweathermap.org/data/2.5/uvi?";
var apiKeyUV = "&appid=0667029354c22542ea4630c17a0785dc";
var uv = "&lat=37.75&lon=-122.37";

 $("#submit").on("click", weatherSearch);
 
 renderSearchHistory();
    
function singleDaySearch(city) {
    var queryURL = api + city + apiKey + units;

    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var time =(moment(response.dt * 1000).format('M/D/Y'));
        $("#local").text(response.name + " " + time);
        $("#temp").html("Temperature: " + response.main.temp + "&#176;F");
        $("#humid").text("Humidity: " + response.main.humidity);
        $("#wind-speed").text("Wind Speed: " + response.wind.speed);
    });
};

function fiveDaySearch(city) {
    var queryURL5 = api5 + city + apiKey5 + units5;

    console.log(queryURL5);
    $.ajax({
        url: queryURL5,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.list[0].dt_txt)
        var time =(moment(response.list[0].dt_txt).format('M/D/Y')); // make four more vars
        $("#loc1").text(time);
        $("#img1").attr("src", " http://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + ".png");
        $("#temp1").html("Temp: " + response.list[0].main.temp + "&#176;F");
        $("#humid1").text("Humidity: " + response.list[0].main.humidity);

        $("#loc2").text(time);
        $("#img2").attr("src", " http://openweathermap.org/img/wn/" + response.list[1].weather[0].icon + ".png");
        $("#temp2").html("Temp: " + response.list[1].main.temp + "&#176;F");
        $("#humid2").text("Humidity: " + response.list[1].main.humidity);

        $("#loc3").text(response.city.name);
        $("#img3").attr("src", " http://openweathermap.org/img/wn/" + response.list[2].weather[0].icon + ".png");
        $("#temp3").html("Temp: " + response.list[2].main.temp + "&#176;F");
        $("#humid3").text("Humidity: " + response.list[2].main.humidity);

        $("#loc4").text(response.city.name);
        $("#img4").attr("src", " http://openweathermap.org/img/wn/" + response.list[3].weather[0].icon + ".png");
        $("#temp4").html("Temp: " + response.list[3].main.temp + "&#176;F");
        $("#humid4").text("Humidity: " + response.list[3].main.humidity);

        $("#loc5").text(response.city.name);
        $("#img5").attr("src", " http://openweathermap.org/img/wn/" + response.list[4].weather[0].icon + ".png");
        $("#temp5").html("Temp: " + response.list[4].main.temp + "&#176;F");
        $("#humid5").text("Humidity: " + response.list[4].main.humidity);
    })
};

function uvSearch(city) {
    var queryURL = apiUV + city + apiKeyUV + uv;
    //console.log(response.value);
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $("#uv").text("UV Index: " + response.value);
    })
};

function saveSearchHistory(city) {
    localStorage.setItem("city", city);
    
    renderSearchHistory();
};

function renderSearchHistory() {
    var lastUserSearch = localStorage.getItem("city");
    var display = $("#display-search");
    var historyItem = $("<p>").html(lastUserSearch);
    display.prepend(historyItem);
};

function weatherSearch(event) {
    event.preventDefault();
    var input = $("#city")
    saveSearchHistory(input.val());
    singleDaySearch(input.val());
    fiveDaySearch(input.val());
    uvSearch(input.val());
}

//console.log((moment().format('M/D/Y')));