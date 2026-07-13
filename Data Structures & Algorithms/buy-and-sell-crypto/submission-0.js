class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let prof = 0, 
            l = 0,
            r = 1;

            while( r < prices.length){
                if(prices[r] > prices[l]){
                    if(prices[r] - prices[l] > prof)
                        prof = prices[r] - prices[l];
                    r++;
                }
                else{
                    l = r;
                    r++;
                }
            }
       return prof;
    }
}
