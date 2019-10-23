/*---------------------------array, multi pointer, sort
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let [i, j, curr] = [0, nums.length - 1, 0]

  while (curr <= j) {
    if (nums[curr] === 0) {
      ;[nums[curr], nums[i]] = [nums[i], nums[curr]]
      i++
    }

    if (nums[curr] === 2) {
      ;[nums[curr], nums[j]] = [nums[j], nums[curr]]
      curr--
      j--
    }

    curr++
  }
}

let nums = [2, 0, 2, 1, 1, 0]
sortColors(nums)
console.log(nums)

/*-----------------------------------No.2, use map to count, sort
var sortColors = function(nums) {
  let map = { 0: 0, 1: 0, 2: 0 }
  nums.forEach(val => map[val]++)
  for (let i = 0; i < nums.length; i++) {
    if (map[0]-- > 0) nums[i] = 0
    else if (map[1]-- > 0) nums[i] = 1
    else nums[i] = 2
  }
}
*/
