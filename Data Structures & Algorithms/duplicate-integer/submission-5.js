class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      if(nums.length !== new Set(nums).size) return true;

        const mp = new Map();

        for(let i of nums){
            if(mp.has(i))
            return true;
        
            else 
            mp.set(i, 1);
        }
        return false;
    }
}
