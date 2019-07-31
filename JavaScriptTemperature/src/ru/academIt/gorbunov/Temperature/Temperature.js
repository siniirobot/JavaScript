document.addEventListener("DOMContentLoaded", function () {
    var inputTemperature = document.getElementById("input");
    var inputTemperatureButton = document.getElementById("input-temp-button");

    inputTemperatureButton.addEventListener("click", function () {
        var newText = inputTemperature.value;

        if (!(!isNaN(parseFloat(newText)) && isFinite(newText))) {
            inputTemperature.value = "";
            return;
        }

        var temperatureInCelsius = parseFloat(newText);

        function getCelsiusToFahrenheit(temperature) {
            return ((temperature * 9 / 5) + 32).toFixed(2);
        }

        function getCelsiusToKelvin(temperature) {
            return (temperature + 273.15).toFixed(2);
        }

        document.getElementById("output-fahrenheit").innerHTML
            = "Темепература в фаренгейт - " + getCelsiusToFahrenheit(temperatureInCelsius);

        document.getElementById("output-kelvin").innerHTML
            = "Темепература в кельвин - " + getCelsiusToKelvin(temperatureInCelsius);
    })
});