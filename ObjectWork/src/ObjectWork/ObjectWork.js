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
            }
        ]
    }
];

function getLargestCitiesCountInCountry(countries) {
    var largestCountries = countries;
    largestCountries.sort(function (country1, country2) {
        return country2.cities.length - country1.cities.length;
    });

    return largestCountries.filter(function (country) {
        return country.cities.length === largestCountries[0].cities.length
    });
}

console.log(getLargestCitiesCountInCountry(countries));

function getCountriesInformation(countries) {
    var countriesInformation = {};

    countries.forEach(function (country) {
        var countryPopulation = 0;
        country.cities.forEach(function (city) {
            countryPopulation += city.population;
        });
        countriesInformation[country.name] = countryPopulation;
    });

    return countriesInformation;
}

console.log(getCountriesInformation(countries));