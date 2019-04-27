// Solution 1: traverse the rotateArray
function minNumberInRotateArray1(rotateArray) {
    let len = rotateArray.length;
    if (!len) {
        return 0;
    }
    for (let i = len-1; i >= 0; i--) {
        if(rotateArray[i-1] > rotateArray[i]) {
            return rotateArray[i];
        }
    }
}

// Solution 2: use binary search
function minNumberInRotateArray2(rotateArray) {
    let len = rotateArray.length;
    if (!len) {
        return 0;
    }
    let left = 0, right = len - 1;
    while (left < right - 1) {
        let mid = Math.floor((left + right) / 2);
        if (rotateArray[left] > rotateArray[mid]) {
            right = mid;
        } else if (rotateArray[right] < rotateArray[mid]) {
            left = mid;
        }
    }
    return Math.min(rotateArray[left], rotateArray[right]);
}

// test
let arr = [5,6,7,8,2,3,4];
console.log(minNumberInRotateArray2(arr));