class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let sc = 0;
        for(let i=0; i<details.length; i++){
            if(Number(details[i].slice(11,13))>60)
            sc += 1;
        }
        return sc;

    }
}
