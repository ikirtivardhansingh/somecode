class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let comp= s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
        let j=comp.length-1;
        for(let i=0 ; i<comp.length; ){
                
                if(comp[i]===comp[j])
                    {
                        i++;
                        j--;
                    }
                else return false;
        }
        return true;
    }
}
