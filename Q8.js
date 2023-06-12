//Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must appear as many times as it shows in both arrays and you may return the result in **any order**.

function intersect(nums1, nums2) {
    const map = new Map();
    const result = [];
  
    // Count frequencies of elements in nums1
    for (const num of nums1) {
      if (map.has(num)) {
        map.set(num, map.get(num) + 1);
      } else {
        map.set(num, 1);
      }
    }
  
    // Iterate through nums2 and find common elements
    for (const num of nums2) {
      if (map.has(num) && map.get(num) > 0) {
        result.push(num);
        map.set(num, map.get(num) - 1);
      }
    }
  
    return result;
  }
  