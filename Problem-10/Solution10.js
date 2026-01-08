
// Here is the solution 

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

const number = PingPong([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
console.log(number);