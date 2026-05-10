class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = new Map();
        let res = 0;
        let maxcount =0;

        for(let i = 0; i< nums.length; i++){
            let num = nums[i];
            count.set(num, (count.get(num)||0) + 1);
            if(count.get(num) > maxcount){
                res = num;
                maxcount = count.get(num);
            }
        }
        return res;
    }
}
