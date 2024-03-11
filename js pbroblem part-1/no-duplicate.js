const briyanKhor = ['abul', 'babul', 'kabul', 'abul', 'babul', 'dabul'];
const numbers = [1, 5, 7, 5, 65, 87];

function noDuplicate (array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique
}

// const uniqueArray = noDuplicate(numbers);
const uniqueArray2 = noDuplicate(briyanKhor);
console.log( uniqueArray2);