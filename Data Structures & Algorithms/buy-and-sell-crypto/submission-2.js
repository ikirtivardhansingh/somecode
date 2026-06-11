class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0,
            r = 0,
            maxProf = -Infinity;
        while(r < prices.length){
            if (prices[l] > prices[r]){
                l = r;
            }
            else{
                maxProf = Math.max(maxProf, prices[r]- prices[l]);
            }
            r++;
        }
        return maxProf;
    }
}
