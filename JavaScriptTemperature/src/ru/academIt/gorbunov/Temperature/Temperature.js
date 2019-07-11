document.addEventListener("DOMContentLoaded",function () {
    var inputTemp = document.getElementById("input");

    var inputTempButton = document.getElementById("input-temp-button");
    inputTempButton.addEventListener("click",function () {
        var newText = inputTemp.value;
        if (!/[+-]?([0-9]*[.])?[0-9]+/.test(newText)){
            inputTemp.value = "Введите температуру в градсуах C";
            return;
        }
        /*if (isNaN(parseFloat(newText) && isNaN(newText))) {
            inputTemp.value = "Введите температуру в градсуах C";
            return;
        }*/

        document.getElementById("output-fahrenheit").innerHTML
            = "Темепература в фаренгейт - " + ((newText * 9/5) + 32);

        document.getElementById("output-kelvin").innerHTML
            = "Темепература в кельвин - " + (newText + 273.15);
    })
});