class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const mp = new Map();

        for(let i=0; i<nums.length; i++){
            if(!mp.has(nums[i])){
                mp.set(nums[i], 1);
            }
            else
              return true;
        }
        return false;
    }
}
