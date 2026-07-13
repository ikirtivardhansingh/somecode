    class Solution {
        /**
         * @param {string[]} strs
         * @returns {string}
         */
        encode(strs) {
            let st= "";
            for(let i=0; i<strs.length; i++){
                st += strs[i].length + "#" + strs[i];
            }
          return st;
        }

        /**
         * @param {string} str
         * @returns {string[]}
         */
        decode(str) {
            let newstr = [];
            let i =0;
            while(i < str.length){
                let j=i;
                while(str[j] !== "#"){
                    j +=1;
                }
                let len = Number(str.slice(i,j));
                let word = str.slice(j+1, j+1+len);
                newstr.push(word);
                i= j+1+len;
            }
            return newstr;
        }
    }
