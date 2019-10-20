/*-------------------------array, binary search
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let low = 0
  let high = nums.length - 1
  let start = -1
  let end = -1

  while (low <= high) {
    let mid = parseInt((low + high) / 2)
    console.log(mid)
    if (nums[mid] === target) {
      start = mid
      end = mid
      while (nums[start - 1] === target) {
        start -= 1
      }
      while (nums[end + 1] === target) {
        end += 1
      }

      return [start, end]
    } else if (nums[mid] < target) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return [start, end]
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
