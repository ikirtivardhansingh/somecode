class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let j= s.length-1;

        for(let i=0; i<s.length;i++) {
           if(i<j){
               let temp = s[i];
                s[i] = s[j];
                s[j] = temp;
                j--;
           }
           else {
            break;
           }
           
        }
        return s;
    }
}
