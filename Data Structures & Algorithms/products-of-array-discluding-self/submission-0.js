class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let j=0;
        let output = new Array(nums.length);
        let pref = 1;
        for(let i = 0; i<nums.length; i++){
            output[i] = pref; 
            pref *=nums[i]; 

        }
        let post = 1;
        for(let j = nums.length-1; j>=0; j--){
            output[j] *= post;
            post *= nums[j];
        }
        return output;
    }
}
