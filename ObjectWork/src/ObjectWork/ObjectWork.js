var countries = [
    countryA = {
        name: "countryA",
        getName: function () {
            return this.name;
        },
        cityA: 5000,
        cityB: 8000,
        cityC: 9000,
        cityD: 1000
    },
    countryB = {
        name: "countryB",
        getName: function () {
            return this.name;
        },
        cityE: 2000,
        cityF: 80000
    },
    countryC = {
        name: "countryC",
        getName: function () {
            return this.name;
        },
        cityG: 3000,
        cityH: 9000,
        cityI: 5000,
        cityJ: 1400,
        cityK: 4000,
        cityL: 7000
    }

];

function getLargestCountry() {
    var nameLargestCountry;
    var largestCountry = 0;

    for (var i = 0; i < countries.length; i++) {
        var cityCount = Object.keys(countries[i]).length - 2;

        if (cityCount > largestCountry) {
            largestCountry = cityCount;
            nameLargestCountry = countries[i].getName();
        }
    }

    return nameLargestCountry;
}

console.log(getLargestCountry());

function getCountryInformation() {
    var cityInfo = {};
    for (var i = 0; i < countries.length;i++) {
        var countryPopulation = 0;
        for (var city in countries[i]) {
            if (!isNaN(parseFloat(countries[i][city])) && isFinite(countries[i][city])){
                countryPopulation = countries[i][city] + countryPopulation;
            }
        }
        cityInfo[countries[i].getName()] = countryPopulation;
    }

    return cityInfo;
}
console.log(getCountryInformation());