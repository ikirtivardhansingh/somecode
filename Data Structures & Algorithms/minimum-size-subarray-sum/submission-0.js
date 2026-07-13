class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let l = 0,
            sum = 0,
            output = Infinity;
        for( let r = 0; r < nums.length; r++){
            sum += nums[r];
                while(sum >= target){
                    output = Math.min(r -  l + 1, output);
                    sum -= nums[l];
                    l++;
                }

        }
return output === Infinity ? 0 : output;

    }
}
