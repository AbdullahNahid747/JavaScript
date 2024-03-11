function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

const max1 = getMax(50, 60);
const max2 = getMax(30, 20);
const ultimateMax = getMax(max1, max2);

console.log('Max of two is:', ultimateMax);