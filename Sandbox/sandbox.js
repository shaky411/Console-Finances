let myArray = [
    1,
    2,
    3,
    55,
    -10,
    78,
    -34,
    15
]

let sorted = myArray.slice().sort((a, b) => a - b)
console.log(sorted);

