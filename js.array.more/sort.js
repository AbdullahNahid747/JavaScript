const persons = ['ami', 'tmi', 'tini', 'se', 'tahara', 'uni'];
const name = persons.sort();
// console.log(name);

const numbers = [2, 4, 6, 7, 9, 1, 3, 5, 8, 12, 25, 37, 45];

const numbers_asc = [...numbers].sort(function (a, b) { return a-b })
const numbers_dsc = [...numbers].sort(function (a, b) { return b-a })

console.log(numbers_asc);
console.log(numbers_dsc)