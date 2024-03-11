const actor = {
    namr: "White",
    color: "Block",
    price: 45,
    isCleaned: true
};

console.log(actor);
const keys = Object.keys(actor);
// [ 'namr', 'color', 'price', 'isCleaned' ]
const values = Object.values(actor);
// [ 'White', 'Block', 45, true ]

const pair = Object.entries(actor);
// [
//     [ 'namr', 'White' ],
//     [ 'color', 'Block' ],
//     [ 'price', 45 ],
//     [ 'isCleaned', true ]
//   ]
console.log(pair)