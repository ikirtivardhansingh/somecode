class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
    
    let r = 0,
        ts = 0,
        max = nums[0];
        if(nums.length === 1) return nums[0];

    while (r < nums.length) {
    
            if(ts < 0){
                ts= 0;
            }
       ts +=nums[r];
       max = Math.max(max, ts);
    r++;
    }


    return max;
}
}
