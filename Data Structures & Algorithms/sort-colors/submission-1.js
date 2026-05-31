class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
    let l = 0,
        r = nums.length-1,
        i =0, temp = 0;

      while ( i <=r ){
          if(nums[i] === 2){
            temp = nums[i];
            nums[i] = nums[r];
            nums[r] = temp;
            r--;
            i--;
          }
          else if(nums[i] === 0){
            temp = nums[i];
            nums[i] = nums[l];
            nums[l] = temp;
            l++;
          }
          i++;
      }

    return nums;
    }
}
