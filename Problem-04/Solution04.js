
// Here is the solution 

const findBigNumber = number => {
    let Big = 0
    number.map(num => {
        if (num > Big) {
            Big = num;
        }
    })
    return Big;
}

const ArrayOfNumbers = [4, 8, 19, 43, 20, 69, 56, 87, 14, 55];
console.log(findBigNumber(ArrayOfNumbers));