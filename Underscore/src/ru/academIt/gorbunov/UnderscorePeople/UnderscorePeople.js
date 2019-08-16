document.addEventListener("DOMContentLoaded", function () {
    var peoples = [
        {
            age:25,
            name: "Andy",
            lastName:"Kendy"
        },
        {
            age:35,
            name: "David",
            lastName:"Mavid"
        },
        {
            age:15,
            name: "Gorge",
            lastName:"Ortg"
        },
        {
            age:45,
            name: "Angelina",
            lastName:"Milina"
        },
        {
            age:67,
            name: "Mark",
            lastName:"Cucamber"
        },
        {
            age:23,
            name: "Maria",
            lastName:"Shwartz"
        },
        {
            age:99,
            name: "Kate",
            lastName:"Ostin"
        },
        {
            age:11,
            name: "Nikolai",
            lastName:"Hypo"
        },
        {
            age:4,
            name: "Andrew",
            lastName:"Dahno"
        },
        {
            age:46,
            name: "Oleg",
            lastName:"Vlasov"
        }
    ];

    var averageAge =  _.chain(peoples)
        .map("age")
        .reduce(function(memo, num){ return memo + num; }, 0)
        .value() / peoples.length;
    console.log(averageAge);
});