class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0;
        let res = 0;
        let num;
        for(let i = 0; i<nums.length; i++){
             num = nums[i];
            if(nums[i]==nums[i-1]) count++;
            else count--;
        }
        return num;
    }
}
