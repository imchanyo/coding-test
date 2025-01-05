/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    let answer = []
      for(let i =0; i < nums?.length;  i++){
        for(let j=0; j< nums.length; j++){
          if(nums[i] + nums[i+1] === target){
            console.log(nums[i]  ,nums[i+1])
            answer.push(i, i +1)
          }
        }
      }
    return [...new Set(answer)]
  };