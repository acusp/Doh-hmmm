#include <stdio.h>
#include <stdlib.h>

/**
 * Source: https://leetcode-cn.com/problems/two-sum/description/
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* nums, int numsSize, int target) {
    int* answer = (int*)malloc(2 * sizeof(int));
    int flag = 0;
    for(int i=0; i<numsSize; i++) {
        for(int j=i+1; j<numsSize; j++) {
            if (nums[i] + nums[j] == target) {
                answer[0] = i;
                answer[1] = j;
                flag = 1;
                break;
            }
        }
        if (1 == flag)
            break;
    }
    return answer;
}

int main(void) {
    int nums[] = {2, 7, 11, 15};
    int *answer = twoSum(nums, sizeof(nums), 9);
    printf("[%d, %d]\n", answer[0], answer[1]);
    return 0;
}
