/**
 *  f(n)   = f(0) + f(1) + ... + f(n-2) + f(n-1)
 *  f(n-1) = f(0) + f(1) + ... + f(n-2)
 *  f(n) - f(n-1) = f(n-1) => f(n) = 2 * f(n-1)
 * 
 *          / 0         ; n = 0;
 *  f(n) = |  1         ; n = 1
 *          \ 2*f(n-1)  ; n > 1
 */
function jumpFloorII(number) {
    if (number <= 1) {
        return number;
    }
    let f = 1;
    while(--number) {
        f = 2 * f;
    }
    return f;
}


// test
console.log(jumpFloorII(0));
console.log(jumpFloorII(2));
console.log(jumpFloorII(3));
console.log(jumpFloorII(4));