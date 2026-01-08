
// Solution of Problem 01 
const ReverseWord = word => {
    const reversedWord = word.split('').reverse().join('');
    return reversedWord;
}

// Solution of Problem 02
const vowelCount = word => {
    const splittedWord = word.toLowerCase().split('');
    const vowelCount = splittedWord.filter(letter => letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u').length;
    return vowelCount;
}

// Solution of Problem 03
const checkPalindrome = word => {
    const reversed = word.toLowerCase().split('').reverse().join('');
    const check = reversed === word.toLowerCase();
    return check;
}

// Solution of Problem 04
const findBigNumber = number => {
    let Big = 0
    number.map(num => {
        if (num > Big) {
            Big = num;
        }
    })
    return Big;
}

// Solution of Problem 05
const removeDuplicates = inputArray => {
    let removedDuplicates = [];
    inputArray.map(number => {
        if (number !== removedDuplicates.find(num => num === number)) {
            removedDuplicates = [...removedDuplicates, number];
        }
    })
    return removedDuplicates;
}

// Solution of Problem 06
const sumOfArray = array => {
    let sum = 0;
    array.map(num => sum = sum + num);
    return sum;
}

// Solution of Problem 07
const filterEven = array => {
    const filteredArray = array.filter(num => (num % 2) == 0)
    return filteredArray;
}

// Solution of Problem 08
const capitalizeSentences = sentence => {
    // I took help from Nimer Awad in StackOverFlow

    const capitalized = sentence.toLowerCase().replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
    return capitalized;
}

// Solution of Problem 09
const findFactorial = check => {
    // I took help form Google
    // formula is [x! = (x * x-1) (x * x-2) (x * x-3) ... (x * 3) (x * 2) (x * 1)]

    let x = 1
    for (let i = check; i > 1; i--) {
        x = x * i;
    }
    return x;
}

// Solution of Problem 10
const PingPong = array => {
    const splitted = array.map(num => {
        if (num % 3 === 0 && num % 5 === 0) {
            return 'PingPong';
        } else if (num % 3 == 0) {
            return 'Ping';
        } else if (num % 5 == 0) {
            return 'Pong';
        } else {
            return num;
        }
    });
    return splitted;
}


// Run all with parameters

const solution01 = ReverseWord('hello');
const solution02 = vowelCount('programming');
const solution03 = checkPalindrome('madam');
const solution04 = findBigNumber([5, 1, 9, 3]);
const solution05 = removeDuplicates([1, 2, 2, 3, 4, 4]);
const solution06 = sumOfArray([1, 2, 3, 4]);
const solution07 = filterEven([1, 2, 3, 4, 5, 6]);
const solution08 = capitalizeSentences('hello world');
const solution09 = findFactorial(5);
const solution10 = PingPong([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

console.log(
    solution01, '\n', 
    solution02, '\n',
    solution03, '\n',
    solution04, '\n',
    solution05, '\n',
    solution06, '\n',
    solution07, '\n',
    solution08, '\n',
    solution09, '\n',
    solution10
)