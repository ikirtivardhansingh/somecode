class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    search(nums: number[], target: number): number {

        let l: number = 0,
            r: number = nums.length - 1,
            m: number;

        while (l <= r) {
            let m: number = l + (Math.trunc((r - l) / 2));
            if (nums[m] > target) {
                r = m - 1;
            }
            else if (nums[m] < target) {
                l = m + 1;
            }
            else if (nums[m] === target)
                return m;
        }

        return -1;
    }
}