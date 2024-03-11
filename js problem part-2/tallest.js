const heights = [80, 82, 85, 83, 86, 87, 86];

function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}

const max = getMax(heights);
console.log("Max value is", max);