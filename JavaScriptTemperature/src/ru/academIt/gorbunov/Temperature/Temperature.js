document.addEventListener("DOMContentLoaded", function () {
    var inputTemp = document.getElementById("input");
    var inputTempButton = document.getElementById("input-temp-button");

    inputTempButton.addEventListener("click", function () {
        var newText = inputTemp.value;

        if (!(!isNaN(parseFloat(newText)) && isFinite(newText))) {
            inputTemp.value = "";
            return;
        }

        var tempInCelsius = parseFloat(newText);

        document.getElementById("output-fahrenheit").innerHTML
            = "Темепература в фаренгейт - " + ((tempInCelsius * 9 / 5) + 32).toFixed(2);

        document.getElementById("output-kelvin").innerHTML
            = "Темепература в кельвин - " + (tempInCelsius + 273.15).toFixed(2);
    })
});