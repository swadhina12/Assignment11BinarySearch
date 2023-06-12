//Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return *the only number in the range that is missing from the array.*

function missingNumber(nums) {
    let missing = nums.length;
  
    for (let i = 0; i < nums.length; i++) {
      missing ^= i ^ nums[i];
    }
  
    return missing;
  }
  