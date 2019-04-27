// use String.replace()
function replaceSpace(str) {
    let pattern = /\s/g;
    return str.replace(pattern, "%20");
}


// test result
let str = "We Are Happy.";
console.log(replaceSpace(str));