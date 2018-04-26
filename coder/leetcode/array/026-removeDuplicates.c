#include <stdio.h>

/**
 * Source: https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/description/
 */

int removeDuplicates(int* nums, int numsSize) {
    int size = numsSize;
    int tmp =  nums[0];
    for(int i=1; i<size; i++) {
        printf("i = %d, tmp = %d\n", i, tmp);
        if(tmp == nums[i]) {
            for(int j=i+1; j<numsSize; j++) {
                nums[j-1]=nums[j];
            }
            size--;
            i--;
        } else {
            tmp = nums[i];
        }
    }

    return size;
}

int main(void) {
    int nums[] = {0,0,1,1,1,2,2,3,3,4};
    int numsSize = (int)sizeof(nums)/sizeof(int);

    // nums is passed in by reference. (i.e., without making a copy)
    int len = removeDuplicates(nums, numsSize);
    printf("len = %d\n", len);

    // any modification to nums in your function would be known by the caller.
    // using the length returned by your function, it prints the first len elements.
    for (int i = 0; i < len; i++) {
        printf("%d\n", nums[i]);
    }

    return 0;
}

