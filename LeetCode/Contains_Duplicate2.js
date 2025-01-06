/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let arr = [];
 for(let i = 0; i < nums.length; i++) {
     if(i - arr[nums[i]] <= k) {
         return true;
     } else {
         arr[nums[i]] = [i] ;
     }
 }
 return false;
};