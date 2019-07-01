var numberArray = [1, 2, 3, 4, 5];


function reverse() {
    numberArray.sort(function reversSort(a, b) {
        return b - a;
    });
}

reverse();
console.log(numberArray);

numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function getSubArrayFirstFive() {
    return numberArray.slice(0, 5);
}

console.log(getSubArrayFirstFive());

function getSubArrayLastFive() {
    return numberArray.slice(10);
}

console.log(getSubArrayLastFive());

function sumEvenNumbers() {
    return numberArray.reduce(function (sum, current) {
        if (current % 2 === 0) {
            return sum + current;
        }
        return sum;
    }, 0);
}


console.log(sumEvenNumbers());

function getSquaresOfEvenNumbersList() {
    var hundred = [];
    var squaresEvenNumbersList = [];

    for (var i = 0; i < 100; i++) {
        hundred[i] = i + 1;
        if (hundred[i] % 2 === 0) {
            squaresEvenNumbersList.push(hundred[i] * 2);
        }
    }

    return squaresEvenNumbersList;
}


console.log(getSquaresOfEvenNumbersList());