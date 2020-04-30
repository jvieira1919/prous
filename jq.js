//api.openweathermap.org/data/2.5/weather?q={city name},{state}&appid=0667029354c22542ea4630c17a0785dc
var api = "https://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "&appid=0667029354c22542ea4630c17a0785dc";
var units = "&units=imperial"



var api5 = "https://api.openweathermap.org/data/2.5/forecast?q=";
var apiKey5 = "&appid=0667029354c22542ea4630c17a0785dc";
var units5 = "&units=imperial"

$("#submit").on("click", weatherSearch);

function singleDaySearch(city) {
    var queryURL = api + city + apiKey + units;

    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $("#local").text(response.name + response.dt)
        $("#temp").html("Temperature: " + response.main.temp + "&#176;F");
        $("#humid").text("Humidity: " + response.main.humidity);
        $("#wind-speed").text("Wind Speed: " + response.wind.speed);
        $("#uv").text("UV Index: " + response.value);
    })
};

function fiveDaySearch(city) {
    var queryURL5 = api5 + city + apiKey5 + units5;

    console.log(queryURL5);
    $.ajax({
        url: queryURL5,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $("#loc1").text(response.city.name);
        $("#img5").attr("src", response.list[0].weather[0].icon);
        $("#temp1").html("Temp: " + response.list[0].main.temp + "&#176;F");
        $("#humid1").text("Humidity: " + response.list[0].main.humidity);

        $("#loc2").text(response.city.name);
        $("#img5").attr("src", response.list[1].weather[0].icon);
        $("#temp2").html("Temp: " + response.list[1].main.temp + "&#176;F");
        $("#humid2").text("Humidity: " + response.list[1].main.humidity);

        $("#loc3").text(response.city.name);
        $("#img5").attr("src", response.list[2].weather[0].icon);
        $("#temp3").html("Temp: " + response.list[2].main.temp + "&#176;F");
        $("#humid3").text("Humidity: " + response.list[2].main.humidity);

        $("#loc4").text(response.city.name);
        $("#img4").attr("src", response.list[3].weather.icon);
        $("#temp4").html("Temp: " + response.list[3].main.temp + "&#176;F");
        $("#humid4").text("Humidity: " + response.list[3].main.humidity);

        $("#loc5").text(response.city.name);
        $("#img5").attr("src", response.list[4].weather[0].icon);
        $("#temp5").html("Temp: " + response.list[4].main.temp + "&#176;F");
        $("#humid5").text("Humidity: " + response.list[4].main.humidity);
    })
};

function weatherSearch(event) {
    event.preventDefault();
    var input = $("#city")
    singleDaySearch(input.val());
    fiveDaySearch(input.val());
};







