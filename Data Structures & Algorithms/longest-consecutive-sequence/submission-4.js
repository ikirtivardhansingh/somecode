class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const st = new Set(nums);
        let k =0, count = 1;
        let cur = Math.min(...nums);
        let maxC = 0;

    for (let i = 0; i<nums.length; i++){
        if( st.has(cur[k]-1))
            cur = cur[k]-1;
        if(st.has(cur+1)){
            count++;
            cur +=1;
        }
        else{
            k++;
            count = 1;
        }
        maxC = Math.max(maxC, count);

    }
    return maxC;                                                    

    }
}
