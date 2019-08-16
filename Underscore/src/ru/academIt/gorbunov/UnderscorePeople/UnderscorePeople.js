document.addEventListener("DOMContentLoaded", function () {
    var peoples = [
        {
            age: 25,
            name: "Andy",
            lastName: "Kendy"
        },
        {
            age: 35,
            name: "David",
            lastName: "Mavid"
        },
        {
            age: 15,
            name: "Gorge",
            lastName: "Ortg"
        },
        {
            age: 45,
            name: "Angelina",
            lastName: "Milina"
        },
        {
            age: 67,
            name: "Mark",
            lastName: "Cucareku"
        },
        {
            age: 23,
            name: "Maria",
            lastName: "Shwartz"
        },
        {
            age: 99,
            name: "Kate",
            lastName: "Ostin"
        },
        {
            age: 11,
            name: "Nikolai",
            lastName: "Hypo"
        },
        {
            age: 4,
            name: "Andrew",
            lastName: "Dahno"
        },
        {
            age: 46,
            name: "Oleg",
            lastName: "Vlasov"
        }
    ];

    var averageAge = _.chain(peoples)
        .pluck("age")
        .reduce(function (memo, num) {
            return memo + num;
        }, 0)
        .value() / _.size(peoples);
    console.log(averageAge);

    var peoplesFrom20To30 = _.chain(peoples)
        .filter(function (p) {
            return p.age >= 20 && p.age <= 30;
        })
        .sortBy("age")
        .value();
    console.log(peoplesFrom20To30);

    var fullName = _.chain(peoples)
        .map(function (p) {
            return p.fullName = p.lastName + " " + p.name;
        })
        .assign(peoples)
        .value();

    console.log(fullName);
});