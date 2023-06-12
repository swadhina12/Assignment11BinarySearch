//Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.

function findDuplicate(nums) {
    let tortoise = nums[0];
    let hare = nums[0];
  
    // Phase 1: Detect cycle
    do {
      tortoise = nums[tortoise];
      hare = nums[nums[hare]];
    } while (tortoise !== hare);
  
    // Phase 2: Find the entrance to the cycle (repeated number)
    let pointer1 = nums[0];
    let pointer2 = tortoise;
  
    while (pointer1 !== pointer2) {
      pointer1 = nums[pointer1];
      pointer2 = nums[pointer2];
    }
  
    return pointer1;
  }
  