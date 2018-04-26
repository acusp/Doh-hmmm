#include <stdio.h>

/**
 * Source: https://leetcode-cn.com/problems/remove-element/description/
 */

int removeElement(int* nums, int numsSize, int val) {
    int size = numsSize;
    for(int i=0; i<size; i++) {
        printf("i = %d, val = %d\n", i, val);
        if(val == nums[i]) {
            for(int j=i+1; j<numsSize; j++) {
                nums[j-1]=nums[j];
            }
            size--;
            i--;
        }
    }

    return size;
}

int main(void) {
    int nums[] = {3, 2, 2, 3};
    int numsSize = (int)sizeof(nums)/sizeof(int);

    // nums is passed in by reference. (i.e., without making a copy)
    int len = removeElement(nums, numsSize, 3);
    printf("len = %d\n", len);

    // any modification to nums in your function would be known by the caller.
    // using the length returned by your function, it prints the first len elements.
    for (int i = 0; i < len; i++) {
        printf("%d\n", nums[i]);
    }

    return 0;
}

