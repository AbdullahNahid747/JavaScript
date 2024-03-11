let students = {
    2222: {
        name: "jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St, Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "hack",
        section: "a",
        class: "IXX",
        address: {
            "building no": 15,
            "street": "Mt, Jonson",
            "city": "Peters_burg",
            "country": "USA"
        }
    }
}
console.log(students[2222].address.city);
console.log(students[3333].address.city);