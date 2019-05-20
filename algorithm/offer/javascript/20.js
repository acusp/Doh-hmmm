let stack = [];
let min_index = 0;

function push(node) {
    stack.push(node);
    if (node < stack[min_index]) {
        min_index = stack.length - 1;
    }
}
function pop() {
    if (min_index === stack.length - 1) {
        min_index = 0;
        for (let i = 0; i < stack.length - 1; i++) {
            if (stack[i] < stack[min_index]) {
                min_index = i;
            }
        }
    }
    stack.pop();
}
function min() {
    return stack[min_index];
}