class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const mp = new Map();

        for(let i=0; i<nums.length; i++){
            if(!mp.has(nums[i])){
                mp.set(nums[i], 1);
            }
            else
            mp.set(nums[i], mp.get(nums[i]) +1);
        }

       let srt = [...mp];
        srt.sort((a, b) => b[1]-a[1]);

        let res = [];

        for (let i=0; i<k; i++){
            res.push(srt[i][0]);
        }
        return res;
            
}}
