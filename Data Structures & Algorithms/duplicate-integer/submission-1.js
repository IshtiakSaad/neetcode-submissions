// This is the code you paste into LeetCode
class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
      if (seen.has(num)) {
        return true;
      }
      seen.add(num);
    }
    return false;
  }
}

// --- THIS IS THE PART YOU MUST ADD LOCALLY TO TEST ---

// 1. Manually create an instance of the class
const s = new Solution();

// 2. Now call the method on that instance
console.log(s.hasDuplicate([1, 2, 3, 1])); // true
console.log(s.hasDuplicate([1, 2, 3, 4])); // false