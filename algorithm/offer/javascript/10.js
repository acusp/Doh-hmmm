/**
 *  f(0) = 0 
 *  f(1) = 1
 *  f(n) = f(n-1) +  f(n-2)  ; n > 1
 */
function rectCover(number) {
    if (number <= 0) {
        return number;
    }
    let f0 = 1, f1 = 1;
    while(number--) {
        f1 = f0 + f1;
        f0 = f1 - f0;
    }
    return f0;
}


// test
console.log(rectCover(0));
console.log(rectCover(2));
console.log(rectCover(4));
console.log(rectCover(5));
