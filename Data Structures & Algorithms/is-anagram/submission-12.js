class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sm= new Map;

        for(let i of s){
            sm.set(i, (sm.get(i) || 0)+1);
        }

        for(let i of t){
            if(!sm.has(i) || sm.get(i)===0)
                return false;
            else {
                sm.set(i, sm.get(i)-1);
            }

        }
        return true;
    }

}
