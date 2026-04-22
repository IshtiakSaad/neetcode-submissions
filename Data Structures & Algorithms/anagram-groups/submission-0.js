class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let myMap = new Map();
        let n = strs.length;

        for(let str of strs){
            let sortedStr = str.split('').sort().join();
            
            if(!myMap.has(sortedStr)){
                myMap.set(sortedStr,[])
            }

            myMap.get(sortedStr).push(str);
        }

        return Array.from(myMap.values());
    }
}
