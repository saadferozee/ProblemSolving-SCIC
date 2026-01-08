
// Here is the solution

const findFactorial = check => {
    // I took help form Google
    // formula is [x! = (x * x-1) (x * x-2) (x * x-3) ... (x * 3) (x * 2) (x * 1)]
    
    let x = 1
    for (let i = check; i > 1; i--) {
        x = x * i;
    }
    return x;
}

console.log(findFactorial(5));