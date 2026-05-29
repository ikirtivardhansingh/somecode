class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        let l = 0,
            r = nums.length-1;
    let temp = [];
        while(l <= r){
     //       temp.unshift(Math.max(nums[l]*nums[l], nums[r]*nums[r]));
            if(nums[l]*nums[l] >= nums[r]*nums[r]){
                temp.unshift(nums[l]*nums[l]);
                l++;
            }
            else{
                temp.unshift(nums[r]*nums[r]);
                r--;
            }
            

        }
    return temp;
    }
}
