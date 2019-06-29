function reverse(){
    var numberArray = [1,2,3,4,5];

    return numberArray.sort(function reversSort(a,b){
        return b-a;
        });
}

console.log(reverse);

numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function subArrayFirstFive(){
    var firstFive = numberArray.slice(0,5);
}

console.log(subArrayFirstFive);

function subArrayLastFive(){
    var lastFive = numberArray.slice(10);
}

console.log(lastFive);

function sum(){
    var sum = numberArray.reduce(function(sum,current) {
              if(current%2 == 0) {
                return sum + current;
                }
                return sum;
              },0);
}


console.log(sum);