var countries = [
    countryA = {
        name: "countryA",
        cites: [
            cityA = {
                population: 5000
            },
            cityB = {
                population: 8000
            },
            cityC = {
                population: 9000
            },
            cityD = {
                population: 1000
            }
        ]
    },
    countryB = {
        name: "countryB",
        cites: [
            cityE = {
                population: 2000
            },
            cityF = {
                population: 80000
            }
        ]
    },
    countryC = {
        name: "countryC",
        cites: [
            cityG = {
                population: 5000
            },
            cityH = {
                population: 5000
            },
            cityI = {
                population: 5000
            },
            cityJ = {
                population: 5000
            },
            cityK = {
                population: 5000
            },
            cityL = {
                population: 5000
            }]
    }

];

function getLargestCountry() {
    var nameLargestCountry;
    var largestCountry = 0;

    for (var i = 0; i < countries.length; i++) {
        var cityCount = Object.keys(countries[i]).length - 2;

        if (cityCount > largestCountry) {
            largestCountry = cityCount;
            nameLargestCountry = countries[i];
        }
    }

    return nameLargestCountry;
}

console.log(getLargestCountry());

function getCountryInformation() {
    var cityInfo = {};
    for (var i = 0; i < countries.length; i++) {
        var countryPopulation = 0;
        for (var city in countries[i]) {
            if (!isNaN(parseFloat(countries[i][city])) && isFinite(countries[i][city])) {
                countryPopulation = countries[i][city] + countryPopulation;
            }
        }
        cityInfo[countries[i].getName()] = countryPopulation;
    }

    return cityInfo;
}

console.log(getCountryInformation());