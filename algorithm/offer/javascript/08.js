/**
 * f(0) = 0;                n = 0
 * f(1) = 1;                n = 1
 * f(2) = 2;                n = 2
 * f(n) = f(n-1) + f(n-2);  n > 2
 */
function jumpFloor(number) {
    let f0 = 1, f1 = 2;
    if (number <= 2) {
        return number;
    }
    for (let i = 2; i < number; i++) {
        f1 = f1 + f0;
        f0 = f1 - f0;
    }
    return f1;
}

// use recursiv
function jumpFloor2(number) {
    if (number <= 2) {
        return number;
    }
    return jumpFloor2(number-1) + jumpFloor2(number-2);
}


// test
console.log(jumpFloor(0));
console.log(jumpFloor(1));
console.log(jumpFloor(39));
console.log(jumpFloor2(0));
console.log(jumpFloor2(1));
console.log(jumpFloor2(39));