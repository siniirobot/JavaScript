var numberArray = [1, 2, 3, 4, 5];


function descendSort(array) {
    array.sort(function (a, b) {
        return b - a;
    });

    return array;
}

console.log(descendSort(numberArray));

numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function getSubArrayFirstFive(array) {
    return array.slice(0, 5);
}

console.log(getSubArrayFirstFive(numberArray));

function getSubArrayLastFive(array) {
    return array.slice(array.length - 5);
}

console.log(getSubArrayLastFive(numberArray));

function sumEvenNumbers() {
    return numberArray.reduce(function (sum, current) {
        if (current % 2 === 0) {
            return sum + current;
        }
        return sum;
    }, 0);
}

console.log(sumEvenNumbers());

function getHundredArray() {
    var hundred = [];

    for (var i = 1; i <= 100;i++) {
        hundred.push(i);
    }

    return hundred;
}

var hundred = getHundredArray();
console.log(hundred);

function getSquaresOfEvenNumbersList() {
    return hundred
        .filter(function (value) {
            return value % 2 === 0;
        })
        .map(function (value) {
            return value * value;
        });
}


console.log(getSquaresOfEvenNumbersList());