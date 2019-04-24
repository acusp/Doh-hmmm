let inStack = [], outStack = [];

function push(node) {
    inStack.push(node);
}

function pop() {
    if (outStack.length === 0) {
        /* Note: save the length of inStack in advance
           because the length of inStack will change */
        let len = inStack.length;
        for (let i = 0; i < len; i++) {
            outStack.push(inStack.pop());
        }
    }
    return outStack.pop();
}

// test
push(1);push(2);push(3);
console.log(pop());
console.log(pop());
console.log(pop());
push(4);console.log(pop());
