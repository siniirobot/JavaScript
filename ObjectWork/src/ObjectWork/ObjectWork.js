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
        cityG: 3500,
        cityH: 999000,
        cityI: 57000,
        cityJ: 1402,
        cityK: 48836,
        cityL: 45458484
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

console.log(largestCountry());

function getCountryInformation() {
    var cityInfo = {};
    for (var i = 0; i < countries.length;i++) {
        var countryPopulation = 0;
        for (var city in countries[i]) {
            countryPopulation += city;
        }
        cityInfo[countries[i].getName()] = countryPopulation;
    }

    return cityInfo;
}

console.log(getCountryInformation());