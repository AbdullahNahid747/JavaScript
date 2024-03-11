// for (let i = 1; i <= 200; i++) {
//     console.log(i);
//     if (i === 100) {
//         console.log("Found 100. Exiting the loop.");
//         break;
//     }
// }

// let sum = 0;

// for (let i = 1; ; i++) {
//     sum += i;
//     if (sum >= 100) {
//         break;
//     }
// }

// console.log("Sum:", sum);

for (let i = 1; i <= 100; i++) {
    console.log(i);

    if (Math.sqrt(i) % 1 === 0) {
        console.log(`Encountered the first square number (${i}). Stopping the loop.`);
        break;
    }
}

