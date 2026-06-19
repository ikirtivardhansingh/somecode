class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const st = new Set();
        let l = 0, 
            r = 0,
            count = 0, 
            max = 0;

        while ( r < s.length) {
            
            while (st.has(s[r])){
                st.delete(s[l]);
                l++;
                count--;
            }
            st.add(s[r]);
            count++;
            max = Math.max(max, count);
            r++;    
        }
        return max;
    }
}
