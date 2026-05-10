class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    //using Map
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
            const mp = new Map();
       
        for(let char of s){
            if( mp.has(char)){
                mp.set(char, mp.get(char)+1)
            }
            else
            mp.set(char, 1);
        }
        for(let char of t){
            if(!mp.has(char) || mp.get(char)=== 0)
            return false;

            else{
                mp.set(char, mp.get(char)-1);
            }
            
        }
        return true;
    }
}
