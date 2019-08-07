document.addEventListener("DOMContentLoaded", function () {
    var inputTemperature = document.getElementById("input");
    var inputTemperatureButton = document.getElementById("input-temperature-button");

    inputTemperatureButton.addEventListener("click", function () {
        var newText = inputTemperature.value;

        if (isNaN(parseFloat(newText)) || !isFinite(newText)) {
            inputTemperature.value = "";
            alert("Введите температуру в градусах цельсии");
            return;
        }

        var temperatureInCelsius = parseFloat(newText);

        function convertCelsiusToFahrenheit(temperature) {
            return ((temperature * 9 / 5) + 32).toFixed(2);
        }

        function convertCelsiusToKelvin(temperature) {
            return (temperature + 273.15).toFixed(2);
        }

        document.getElementById("output-fahrenheit").innerHTML
            = "Темепература в фаренгейт - " + convertCelsiusToFahrenheit(temperatureInCelsius);

        document.getElementById("output-kelvin").innerHTML
            = "Темепература в кельвин - " + convertCelsiusToKelvin(temperatureInCelsius);
    })
});