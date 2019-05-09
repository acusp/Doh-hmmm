function reOrderArray(array) {
    let newArray = [];
    let oddIndex = 0, oddCount = 0;
    for (let i = 0; i < array.length; ++i) {
        if (array[i] % 2 !== 0) {
            oddCount = oddCount + 1;
        }
    }

    for (let i = 0; i < array.length; ++i) {
        if (array[i] % 2 === 0) {
            newArray[oddCount++] = array[i];
        } else {
            newArray[oddIndex++] = array[i];
        }
    }
    return newArray;
}


// test
console.log(reOrderArray([1, 8, 7, 5, 4]));