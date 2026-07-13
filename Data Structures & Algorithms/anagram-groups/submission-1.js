class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.length <= 0 ) return strs; 
        
            const sorted = strs.map(str=> str.split("").sort().join(""));
            const mp = new Map();

            for(let i=0 ; i<strs.length; i++){
                if(!mp.has(sorted[i])){
                        mp.set(sorted[i], [strs[i]]);
                }
                else
                    mp.get(sorted[i]).push(strs[i]);
            }        
        return [...mp.values()];
    }

}
