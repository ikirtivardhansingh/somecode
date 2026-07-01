class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const newar = matrix.flat();
        let l = 0, 
            r = newar.length-1;

        while ( l <= r) {
            let m = l + (Math.trunc((r - l)/2));
            if ( newar[m] > target) {
                r = m-1;
            }
            else if ( newar[m] < target) 
                l = m+1;
            else if ( newar[m] === target) {
                return true;
            }
        }
        return false;
    }
}
