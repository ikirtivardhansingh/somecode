class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let rec = [];

        for ( let i of operations){
            if (!isNaN(i)) 
                rec.push(Number(i));
            else if (i === '+') 
                rec.push(rec[rec.length-1] + rec[rec.length-2]);
            else if (i === 'D')
                rec.push(rec[rec.length-1] * 2);
            else if (i === 'C')
                rec.pop();
        }

        let sum = rec.reduce((ac, c)=> ac + c, 0);
        return sum;

    }
}
