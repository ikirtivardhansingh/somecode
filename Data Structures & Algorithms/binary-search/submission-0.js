class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        let l = 0, 
            r = nums.length - 1,
            m;

        while ( l <= r ) {
            let m = l + (Math.trunc((r - l)/2));
            if (nums[m] > target) {
                r = m-1;
            }
            else if (nums[m] < target) {
                l = m+1;
            }
            else if ( nums[m] === target)
                return m;
        }
        return -1;
        
    }
}
