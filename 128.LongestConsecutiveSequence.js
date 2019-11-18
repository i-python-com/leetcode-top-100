/*------------------------------------array, set.size, set.has, set.delete
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let numsSet = new Set(nums)
  let maxLen = 0
  let currLen = 0
  let minNum = Math.min(...numsSet)

  while (numsSet.size) {
    if (numsSet.has(minNum)) {
      currLen++
      numsSet.delete(minNum)
      minNum++
    } else {
      maxLen = Math.max(maxLen, currLen)
      currLen = 0
      minNum = Math.min(...numsSet)
    }
  }

  return Math.max(maxLen, currLen)
}
