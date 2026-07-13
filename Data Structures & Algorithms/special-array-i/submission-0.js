class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isArraySpecial(nums) {
        if(nums.length===1) return true;
        for(let i=0; i<nums.length;){
            if((nums[i]%2 ===0 && nums[i+1]%2!==0) || (nums[i]%2 !==0 && nums[i+1]%2===0))
            i++;
            else return false;
        }
        return true;
    }
}
