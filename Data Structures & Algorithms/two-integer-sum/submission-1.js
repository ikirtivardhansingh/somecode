class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const mp = new Map();
        for(let i=0; i<nums.length; i++){
            let temp= target - nums[i];

                if(!mp.has(temp)){
                    mp.set(nums[i], i);
                }
                else return [mp.get(temp), i];
        }
    }
}
