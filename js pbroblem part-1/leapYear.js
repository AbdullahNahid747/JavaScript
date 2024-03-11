function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}

const isleap = isLeapYear(2024);
// console.log(isleap);

function isLeapYears(year){
    if(year % 100 !== 0 && year % 4){
        return true;
    }
    else if(year % 400 === 0){
        return false;
    }
    else{
        return false;
    }
}

const isleaps1 = isLeapYears(2021);
const isleaps2 = isLeapYears(2022);
const isleaps3 = isLeapYears(2023);
const isleaps4 = isLeapYears(2024);
const isleaps5 = isLeapYears(2025);
console.log(isleaps1, isleaps2, isleaps3, isleaps4, isleaps5);