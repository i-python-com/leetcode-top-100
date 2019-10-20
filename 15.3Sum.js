/*----------------------------Array, two pointer
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let result = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      let total = nums[left] + nums[right] + num
      if (total > 0) {
        right--
      } else if (total < 0) {
        left++
      } else {
        result.push([num, nums[left], nums[right]])
        while (nums[right] === nums[right - 1] && left < right) right--
        while (nums[left] === nums[left + 1] && left < right) left++
        left++
        right--
      }
    }
    while (nums[i] === nums[i + 1]) i++
  }

  return result
}
