/*-------------------------array, permutation
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let flag = 0

  for (let i = nums.length - 2; i >= 0; i--) {
    // choose from second last one to first one
    let n = nums[i]

    for (let j = nums.length - 1; j > i; j--) {
      // compare from right to left, find first one bigger than itself
      // swap it
      if (n < nums[j]) {
        nums[i] = nums[j]
        nums[j] = n
        flag = 1
        break
      }
    }

    if (flag === 1) {
      // if found, sort the arr inplace from i+1 to the end
      i += 1
      let k = nums.length - 1
      while (i < k) {
        let temp = nums[i]
        nums[i] = nums[k]
        nums[k] = temp
        i++
        k--
      }
      break
    }
  }

  if (flag == 0) nums.sort((a, b) => a - b)
  return nums
}

console.log(nextPermutation([5, 1, 4, 3, 2]))

/*----------------------------------------No.2
var nextPermutation = function(nums) {
  if (nums.length < 2) return nums

  var i = nums.length - 2
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--
  }

  if (i < 0) return nums.reverse()

  for (let j = nums.length - 1; j > i; j--) {
    if (nums[i] < nums[j]) {
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
      break
    }
  }

  i += 1
  let k = nums.length - 1
  while (i < k) {
    let temp = nums[i]
    nums[i] = nums[k]
    nums[k] = temp
    i++
    k--
  }

  return nums
}
*/
