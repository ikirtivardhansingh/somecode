class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        const k={};
        for(let i=0; i< nums.size; i++){
            if(nums[i]!==val)
            {
                k= nums[i];
            }
        }
      
        return k;
    }
}
