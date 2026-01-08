
// Here is the solution

const ReverseWord = word => {
    const reversedWord = word.split('').reverse().join('');
    return reversedWord;
}

const testing = ReverseWord('hello');
console.log(testing);