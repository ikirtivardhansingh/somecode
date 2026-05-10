class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {

            const mp = new Map();
            for(let i=0; i<nums.length; i++){
                if(!mp.has(nums[i])){
                    mp.set(nums[i], 1);
                }
                else{
                    mp.set(nums[i], mp.get(nums[i])+1);
                }
                if(mp.get(nums[i])> nums.length/2) return nums[i];
            }
    }
}
