class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        let num = 0;
       for( let j= nums.length; j>=0;j--){
        for(let i=nums.length; i>=0; i--){
            if(nums[i]<nums[i-1]){
                num= nums[i-1];
                nums[i-1]=nums[i];
                nums[i]=num;
            }
        }}
        return nums;
    }
}
