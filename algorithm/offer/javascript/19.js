function printMatrix(matrix) {
    let result = [];
    let row = matrix.length;
    let col = matrix[0].length;
    
    for (let i = 0; i < Math.min(Math.ceil(col/2), Math.ceil(row/2)); i++) {
        for (let j = i; j < col-i; j++) {
            result.push(matrix[i][j]);
        }
        for (let j = i+1; j < row-i; j++) {
            result.push(matrix[j][col-i-1]);
        }
        for (let j = col-i-2; j >= i && row-i-1 > i; j--) {
                result.push(matrix[row-i-1][j]);
        }
        for (let j = row-i-2; j > i && col-i-1 > i; j--) {
            result.push(matrix[j][i]);
        }
    }

    return result;
}


// test
console.log(printMatrix([[1]]));
console.log(printMatrix([[1], [2], [3], [4]]));
console.log(printMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(printMatrix([[1, 2], [3, 4], [5, 6]]));