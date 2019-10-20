/*-------------------------array, binary search
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length == 0) return -1
  if (nums.length == 1) return nums[0] == target ? 0 : -1

  let low = 0
  let high = nums.length - 1

  while (low <= high) {
    mid = parseInt((low + high) / 2)

    if (target == nums[mid]) {
      return mid
    } else if (nums[low] <= nums[mid]) {
      // this means between `low` & `mid` is in correct order
      if (target >= nums[low] && target < nums[mid]) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    } else {
      // this means between `mid` & `high` is in correct order
      if (target > nums[mid] && target <= nums[high]) {
        low = mid + 1
      } else {
        high = mid - 1
      }
    }
  }
  return -1
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0))
