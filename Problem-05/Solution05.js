
// Here is the solution

const removeDuplicates = inputArray => {
    let removedDuplicates = [];
    inputArray.map(number => {
        if (number !== removedDuplicates.find(num => num === number)) {
            removedDuplicates = [...removedDuplicates, number];
        }
    })
    return removedDuplicates;
}

const array = [1, 2, 2, 2, 4, 9, 4, 5, 6, 6, 6, 99, 99];
console.log(removeDuplicates(array));