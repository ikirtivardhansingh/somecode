class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let l = 0,
            r = 1;

        while( r < nums.length){
            if ( nums[l] === nums[r] && r - l <= k){
                return true;    
            }
            else r++;
        }
        return false;
    }
}
