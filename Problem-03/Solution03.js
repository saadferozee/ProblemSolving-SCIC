
// Here is the solution 

const checkPalindrome = word => {
    const reversed = word.toLowerCase().split('').reverse().join('');
    const check = reversed === word.toLowerCase();
    return check;
}

console.log(checkPalindrome('madam'));