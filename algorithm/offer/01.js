// Solution 1:  from array[0][0] to array[row][col]
function Find1(target, array) {
    for (let i = 0; i < array.length; ++i) {
        for (let j = 0; j < array[i].length; ++j) {
            if (target === array[i][j]) {
                return true;
            } else if (target < array[i][j]) {
                break;
            }
        }
    }
    return false;
}

// Solution 2: from array[row][0] -> array[0][x]
function Find2(target, array) {
    let row = array.length -1,
        col = array[0].length -1;

    for (let i = 0; i <= col; ++i) {
        // console.log("row = " + row + ", i = " + i);
        if (target === array[row][i]) {
            return true;
        } else if (target < array[row][i]) {
            if (0 === row)
                break;
            row -= 1;
            i -= 1;
        }
        continue;
    }
    return false;
}

// test
let arr = [[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];
console.log(Find2(5, arr));
