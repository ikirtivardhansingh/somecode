class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
     if(s.length !== t.length) return false;
    

    const stor={};

    for(let char of s)
    {
        if(stor[char]=== undefined) stor[char]=1;
        else
        stor[char]++;
    } 

    for(let char of t){
        if(!stor[char])
            return false;
            stor[char]--;
    }
    return true;

 }  
    
}
