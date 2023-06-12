//Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
  
      if (nums[mid] > nums[right]) {
        // Minimum element is on the right side
        left = mid + 1;
      } else {
        // Minimum element is on the left side or current element is the minimum
        right = mid;
      }
    }
  
    return nums[left];
  }
  