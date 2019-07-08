var countries = [
    {
        name: "countryA",
        cities: [
            {
                name: "cityA",
                population: 5000
            },
            {
                name: "cityB",
                population: 8000
            },
            {
                name: "cityC",
                population: 9000
            },
            {
                name: "cityD",
                population: 1000
            }
        ]
    },
    {
        name: "countryB",
        cities: [
            {
                name: "cityE",
                population: 2000
            },
            {
                name: "cityF",
                population: 80000
            }
        ]
    },
    {
        name: "countryC",
        cities: [
            {
                name: "cityG",
                population: 12000
            },
            {
                name: "cityH",
                population: 8000
            },
            {
                name: "cityI",
                population: 9000
            },
            {
                name: "cityJ",
                population: 1000
            }
        ]
    },
    {
        name: "countryD",
        cities: [
            {
                name: "cityK",
                population: 5000
            },
            {
                name: "cityL",
                population: 5000
            },
            {
                name: "cityM",
                population: 5000
            },
            {
                name: "cityN",
                population: 5000
            },
            {
                name: "cityO",
                population: 5000
            },
            {
                name: "cityP",
                population: 5000
            }]
    }
];

function getLargestCountries(array) {
    var largestCountries = [];
    array.forEach(function (value) {
        if (largestCountries.length === 0) {
            largestCountries.push(value);
        } else {
            if (largestCountries[0].cities.length < value.cities.length) {
                largestCountries = [];
                largestCountries.push(value);
            } else if (largestCountries[0].cities.length === value.cities.length) {
                largestCountries.push(value);
            }
        }
    });

    return largestCountries;
}

console.log(getLargestCountries(countries));

function getCountriesInformation(array) {
    var countriesInformation = {};

    array.forEach(function (value) {
        countriesInformation[value.name] = value.cities.reduce(function (sum, currentValue) {
            return sum + currentValue.population;
        },0);
    });

    return countriesInformation;
}

console.log(getCountriesInformation(countries));