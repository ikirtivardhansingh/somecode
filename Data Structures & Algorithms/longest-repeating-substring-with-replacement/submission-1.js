class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const mp = new Map();
        let l = 0, 
            r = 0, 
            max = 0, res;


        for ( let i = 0; i < s.length; i++){
            mp.set(s[i], (mp.get(s[i]) || 0 ) + 1);
            max = Math.max(max, mp.get(s[i]));
      


        while ( (i - l + 1) - max > k) { 
            mp.set(s[l], mp.get(s[l]) -1 );
            l++;
        }
        res = Math.max(max, i - l +1);
  } return res;
    }
   
}
