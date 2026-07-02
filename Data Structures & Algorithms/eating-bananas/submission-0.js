class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1,
             r = Math.max(...piles),
             res = r;

        while ( l <= r ) {
           let m = Math.floor((l + r) / 2);
           let hours = 0; 
           for ( let p of piles) {
            hours += Math.ceil(p / m);
           }
           
           if ( hours <= h) {
            res = m;
            r = m -1;
           }
           else l = m+1;
        }
    return res;
    }

}
