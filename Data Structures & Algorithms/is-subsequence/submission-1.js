class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {

        const mp= new Map();

        for(let i of t){
            if(!mp.has(i)){
                    mp.set(i, 1);
            }
            else 
            mp.set(i, mp.get(i)+1);
        }
        for(let i of s){
            if(!mp.has(i) || mp.has(i)===0){
                return false;
            }
            else
            mp.set(i, mp.get(i)-1);
        }
        return true;
    }
}
