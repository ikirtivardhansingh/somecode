class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let sc = 0;
        for(let i=0; i<details.length; i++){
            if((details[i][11]>=6) && (details[i][12]>0))
            sc += 1;
        }
        return sc;

    }
}
