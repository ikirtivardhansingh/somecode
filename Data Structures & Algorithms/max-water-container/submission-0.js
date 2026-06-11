class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0, 
            r = heights.length - 1,
            ht = 0,
            max = 0;
        
        while (l < r){
            ht = (Math.min(heights[r], heights[l])) * (r - l);
            if(heights[r] > heights[l]) l++;
            else r--;
            max = Math.max(max, ht);
        }
        return max;
    }
}
