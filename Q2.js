//A peak element is an element that is strictly greater than its neighbors.

function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
  
      if (nums[mid] > nums[mid + 1]) {
        // Current element is greater than the next element, potential peak on the left side
        right = mid;
      } else {
        // Current element is less than or equal to the next element, potential peak on the right side
        left = mid + 1;
      }
    }
  
    return left;
  }
  