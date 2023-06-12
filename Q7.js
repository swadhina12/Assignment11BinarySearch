//Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.

function searchRange(nums, target) {
    const startIndex = findFirstOccurrence(nums, target);
    
    if (startIndex === -1) {
      return [-1, -1];
    }
    
    const endIndex = findLastOccurrence(nums, target);
    
    return [startIndex, endIndex];
  }
  
  function findFirstOccurrence(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let index = -1;
    
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      
      if (nums[mid] >= target) {
        right = mid - 1;
        
        if (nums[mid] === target) {
          index = mid;
        }
      } else {
        left = mid + 1;
      }
    }
    
    return index;
  }
  
  function findLastOccurrence(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let index = -1;
    
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      
      if (nums[mid] <= target) {
        left = mid + 1;
        
        if (nums[mid] === target) {
          index = mid;
        }
      } else {
        right = mid - 1;
      }
    }
    
    return index;
  }
  