class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
    
    let r = 0,
        cs = 0,
        max = nums[0];
     
    while (r < nums.length) {
            if(cs < 0){
                cs= 0;
            }
        cs +=nums[r];
       max = Math.max(max, cs);
    r++;
    }
    return max;
}
}
