class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let st = "";
       let big = (word1.length > word2.length) ? word1.length : word2.length;

        for(let i =0; i<big; i++){
        if(word1[i]!== undefined){            
            st+=word1[i];
            
        }
        if(word2[i]!== undefined){
            st+= word2[i];
        }
       
        }
        return st;
    }
}
