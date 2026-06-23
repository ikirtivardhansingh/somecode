class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
      const mp = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    let stack = [];

    for( let c of s){
        if ( mp[c]){
            if ( stack.length > 0 && stack[stack.length-1] === mp[c] ) {
                stack.pop();
            }
            else return false;

        }

        else stack.push(c);
    }
    return stack.length === 0;
    }
}
