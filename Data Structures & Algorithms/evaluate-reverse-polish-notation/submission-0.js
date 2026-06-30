class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for ( let c of tokens){
            if (c === "+")
                stack.push(stack.pop() + stack.pop());
            else if (c === "-") {
                a = stack.pop();
                b = stack.pop();
                stack.push( b - a);
            }
            else if(c === "*")
                stack.push(stack.pop() * stack.pop());
             else if (c === "/") {
                a = stack.pop();
                b = stack.pop();
                stack.push( Math.trunc(b/a));
            }
            else stack.push(Number(c));

           
        }
        return stack.pop();
    }
}
