class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (!this.stack.length) {
            this.stack.push({val: val, min: val});
        }
        else {
            const curMin = this.stack[this.stack.length - 1].min;
            this.stack.push({val: val, min: Math.min(val, curMin)});
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length-1].val;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length -1 ].min;
    }
}
