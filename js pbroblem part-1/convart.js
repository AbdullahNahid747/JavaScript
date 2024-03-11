function incToFeet (inch){
    const feet = inch / 12;
    return feet;
}

// const myHight = incToFeet (71.9);
// console.log(myHight);

function inchToHight (inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemainig = inch % 12;
    const result = feetFraction + " ft " + inchRemainig + " inch. "
    return result; 
}

const myHight = inchToHight (71.9);
// console.log(myHight);

function mileToKl (mile){
    const kilo = mile * 1.60934;
    return kilo;
}
