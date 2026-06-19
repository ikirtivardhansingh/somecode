class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowMp = new Map();
        const colMp = new Map();
        const sqMp = new Map();

        for( let r = 0; r < board.length; r++) {
            let c = 0; 
            while ( c < board[r].length) {
                if( board[r][c] === "."){
                    c++;
                    continue;
                    }

                const sqkey = `${Math.floor(r/3)}, ${Math.floor(c/3)}`;
                
                if ( (  rowMp.get(r) && rowMp.get(r).has(board[r][c]) ) ||
                     (  colMp.get(c) && colMp.get(c).has(board[r][c]) ) ||
                     (  sqMp.get(sqkey) && sqMp.get(sqkey).has(board[r][c]) )
                )
                return false;

                if(!rowMp.has(r)) rowMp.set(r, new Set());
                if(!colMp.has(c)) colMp.set(c, new Set());
                if(!sqMp.has(sqkey)) sqMp.set(sqkey, new Set());

                rowMp.get(r).add(board[r][c]);
                colMp.get(c).add(board[r][c]);
                sqMp.get(sqkey).add(board[r][c]);   
                c++;              
            }

        }
        return true;
    }
}
