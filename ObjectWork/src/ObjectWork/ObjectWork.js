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
    return array.reduce(function (previousValue, currentValue) {
        if (previousValue.length === 0) {
            previousValue.push(currentValue);
        } else {
            if (previousValue[0].cities.length < currentValue.cities.length) {
                previousValue = [];
                previousValue.push(currentValue);
            } else if (previousValue[0].cities.length === currentValue.cities.length) {
                previousValue.push(currentValue);
            }
        }
        return previousValue;
    }, []);
}

console.log(getLargestCountries(countries));

function getCountriesInformation() {
    var cityInfo = {};

    countries.forEach(function (value) {
        cityInfo[value.name] = value.cities.reduce(function (previousValue, currentValue) {
            return previousValue += currentValue.population;
        }, 0);
    });

    return cityInfo;
}

console.log(getCountriesInformation());