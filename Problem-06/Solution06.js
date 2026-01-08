
// Here is the solution 

const sumOfArray = array => {
    let sum = 0;
    array.map(num => sum = sum + num);
    return sum;
}

const array = [1, 2, 3, 4];
console.log(sumOfArray(array));