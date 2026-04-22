class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let n = nums.length;
        let flag = false;
        let arr = [0,0];
        
        for(let i=0 ; i<n-1 ; i++){
            for(let j=i+1 ; j<n ; j++){
                if(nums[i]+nums[j]==target){
                    arr[0] = i;
                    arr[1] = j;
                    break;
                }
            }
        }

        return arr;
    }
}
