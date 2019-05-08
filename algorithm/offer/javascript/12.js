function Power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    let e = exponent > 0 ? exponent : -exponent;
    let result = base;
    
    for (let i = 0; i < e - 1; i++) {
        result = result * base;
    }

    return exponent > 0 ? result : 1 / result;
}


// test
console.log(Power(2, -1));
console.log(Power(2, 1));
console.log(Power(2, 0));
console.log(Power(-2, 0));
console.log(Power(-2, 1));
