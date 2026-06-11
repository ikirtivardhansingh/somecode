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
            if(r - l > k) l++;
            if ( nums[l] === nums[r]){
                return true;    
            }
            else r++;
        }
        return false;
    }
}
