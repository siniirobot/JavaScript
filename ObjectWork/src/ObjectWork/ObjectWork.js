var countries = [
    countryA = {
        name: "countryA",
        cites: [
            cityA = {
                name: "cityA",
                population: 5000
            },
            cityB = {
                name: "cityB",
                population: 8000
            },
            cityC = {
                name: "cityC",
                population: 9000
            },
            cityD = {
                name: "cityD",
                population: 1000
            }
        ]
    },
    countryB = {
        name: "countryB",
        cites: [
            cityE = {
                name: "cityE",
                population: 2000
            },
            cityF = {
                name: "cityF",
                population: 80000
            }
        ]
    },
    countryC = {
        name: "countryC",
        cites: [
            cityG = {
                name: "cityG",
                population: 12000
            },
            cityH = {
                name: "cityH",
                population: 8000
            },
            cityI = {
                name: "cityI",
                population: 9000
            },
            cityJ = {
                name: "cityJ",
                population: 1000
            }
        ]
    },
    countryD = {
        name: "countryD",
        cites: [
            cityK = {
                name: "cityK",
                population: 5000
            },
            cityL = {
                name: "cityL",
                population: 5000
            },
            cityM = {
                name: "cityM",
                population: 5000
            },
            cityN = {
                name: "cityN",
                population: 5000
            },
            cityO = {
                name: "cityO",
                population: 5000
            },
            cityP = {
                name: "cityP",
                population: 5000
            }]
    }

];

function getLargestCountry(array) {
    var largestCountry = [];

    array
        .map(function (value) {
            if (largestCountry.length === 0) {
                largestCountry.push(value)
            } else {
                if (value.cites.length > largestCountry[0].cites.length) {
                    largestCountry = [];
                    largestCountry.push(value);
                } else if (value.cites.length === largestCountry[0].cites.length) {
                    largestCountry.push(value);
                }
            }
        });

    return largestCountry;
}

console.log(getLargestCountry(countries));

function getCountryInformation() {
    var cityInfo = {};

    countries
        .forEach(function (value) {

            cityInfo[value.name] = value.cites
                .reduce(function (previousValue, currentValue) {
                    return previousValue += currentValue.population;
                },0);
        });

    return cityInfo;
}

console.log(getCountryInformation());