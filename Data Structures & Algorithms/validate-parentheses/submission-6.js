class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
       // let stack = [];
        
        while (s.includes("{}") || s.includes("()") || s.includes("[]")) {
            s= s.replace("{}", "");
            s = s.replace("()", "");
            s = s.replace("[]", "")
        }
        if ( s.length === 0) return true;
        else return false;

    }
}
