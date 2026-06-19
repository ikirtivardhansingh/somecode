class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const st = new Set(nums);
        let maxC = 0;
        
        for (let num of st){

            if(!st.has(num - 1)) {
                let len = 0;
            
                while (st.has(num + len)){
                    len++;
                }
            
                maxC = Math.max(maxC, len)
            
            }
        }
    return maxC;                                                    

    }
}
