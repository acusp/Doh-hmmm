/* Solution 1:
 * if use n >> 1, will have infinite loop,
 * cause if n < 0, n will become 0xFFFF.
 */
function NumberOf1(n) {
    let count = 0, flag = 1;
    while (flag) {
        if (flag & n) {
            count++;
        }
        flag = flag << 1;
    }
    return count;
}

/**
 * Solution 2:
 * "x & (x-1)" can remove the most right side "1" in binary number
 */
function NumberOf1_m2(n) {
    let count = 0;
    while (n) {
        n = n & (n - 1);
        count++;
    }

    return count;
}


// test
console.log(NumberOf1(0));
console.log(NumberOf1_m2(0));
console.log(NumberOf1(7));
console.log(NumberOf1_m2(7));
console.log(NumberOf1(-1));
console.log(NumberOf1_m2(-1));
console.log(NumberOf1(-10));
console.log(NumberOf1_m2(-10));