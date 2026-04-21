class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let isDuplicate = new Set();

        for (const num of nums) {
            if(!isDuplicate.has(num)){
                isDuplicate.add(num);
            }
            else return true;
        }

        return false;
    }
}