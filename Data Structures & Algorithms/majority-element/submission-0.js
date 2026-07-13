class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let maj = 0;
        let k = 0;
    
        for(let i=0; i<nums.length; i++){
            if(nums[k]==nums[i]){
                maj= nums[i];
                k++;
            }
        }
        return maj;
    }
}
