
// Here is the solution 

const filterEven = array => {
    const filteredArray = array.filter(num => (num % 2) == 0 )
    return filteredArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEven(array));