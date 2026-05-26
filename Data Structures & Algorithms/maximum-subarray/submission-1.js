class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
    
    let l = 0,
        r = 0,
        ts = 0,
        max = ts;
        if(nums.length === 1) return nums[0];

    while (r < nums.length) {
            ts += nums[r];
            if(ts < 0){
                r++;
                l = r;
                ts= 0;
            }
            else if (ts>= max){ 
                max = ts;
                r++;
            }

    }


    return max;
}
}
