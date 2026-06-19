class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const st = new Set(nums);
        let k =0, count = 1;
        let cur = nums[k];
        let maxC = -Infinity;

    for (let i = 0; i<nums.length; i++){
        if(st.has(cur+1)){
            count++;
            cur +=1;
        }
        else{
            k++;
            count = 1;
            cur = nums[k];
        }
        maxC = Math.max(maxC, count);

    }
    return maxC;                                                    

    }
}
