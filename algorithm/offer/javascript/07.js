function Fibonacci(n) {
    let f0 = 0, f1 = 1;
    for (let i = 0; i < n; i++) {
        f1 = f1 + f0;
        f0 = f1 - f0;
    }
    return f0;
}

// use recursive: but it takes too long
function Fibonacci2(n) {
    if (n <= 1) {
        return n;
    }
    return Fibonacci2(n-1) + Fibonacci2(n-2);
}

// test
console.log(Fibonacci(0));
console.log(Fibonacci(1));
console.log(Fibonacci(39));
console.log(Fibonacci2(0));
console.log(Fibonacci2(1));
console.log(Fibonacci2(39));