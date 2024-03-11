let data = {
    data: [
        {
            bookId: 1,
            bookDetails: {
                name: "habluder adda",
                category: "XYZ",
                price: "20$",
            },
            bookCategory: "basic"
        },
        {
            bookId: 2,
            bookDetails: {
                name: "habluder_adda",
                price: "400$",
            },
            bookCategory: "basic"
        }
    ]
};

console.log(data.data[0].bookDetails.name); // Output: "habluder adda"
console.log(data.data[1].bookDetails.price); // Output: "400$"
console.log(data.data[1].bookCategory); // Output: "basic"
