
// Here is the solution

const vowelCount = word => {
    const splittedWord = word.toLowerCase().split('');
    const vowelCount = splittedWord.filter(letter => letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u').length;
    return vowelCount;
}

const word = vowelCount('programming');
console.log(word);