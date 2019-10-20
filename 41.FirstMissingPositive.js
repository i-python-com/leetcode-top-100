/*-------------------------array, sortedArr[index] = index
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let sortedArr = [0]
  let index
  for (index = 0; index < nums.length; index++) {
    if (nums[index] > 0 && nums[index] <= nums.length) {
      sortedArr[nums[index]] = nums[index]
    }
  }
  console.log(sortedArr)
  for (index = 0; index < sortedArr.length; index++) {
    if (sortedArr[index] !== index) break
  }

  return index
}

console.log(firstMissingPositive([7, 8, 9, 11, 12]))

/*---------------------------------------------------------No.2
var firstMissingPositive = function(nums) {
  for (var i = 1; i < Number.MAX_SAFE_INTEGER; i++) {
    if (nums.includes(i)) {
      console.log(i)
      continue
    } else {
      return i
    }
  }
}
*/
