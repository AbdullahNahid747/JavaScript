function oddAverage(numbers){
    const odds = [];
    for(const number of numbers){
        if(number % 2 === 1){
            odds.push(number);
        }
    }
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg;
}

const numbers = [3, 5, 7, 9, 11, 13,  15, 17, 19];
const avg = oddAverage(numbers);
console.log("Average of the odd numbers is:", avg);