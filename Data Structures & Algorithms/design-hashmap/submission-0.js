class MyHashMap {
    constructor() {
        this.mp = {};
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.mp[key] = value;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.mp[key]===undefined)
        return -1;
        return this.mp[key];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        delete this.mp[key];
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
