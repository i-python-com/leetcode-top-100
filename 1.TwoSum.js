/*---------------------------index pointer
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const prevVal = {}
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i]
    const neededValue = target - currNum
    const index2 = prevVal[neededValue]
    if (index2 != null) {
      return [index2, i]
    } else {
      prevVal[currNum] = i
    }
  }
}

/*-----------------------------------------------No.2
var twoSum = function(nums, target) {
  const valueIndexMap = new Map()
  for(let i = 0; i< nums.length; i++){
    let currNum = nums[i]
    let neededValue = target - currNum
    let index2 = valueIndexMap.get(neededValue)
    if(index2 != null)  return [index2, i]
    else valueIndexMap.set(currNum, i)
  }
}
*/

console.log(twoSum([2, 7, 11, 15], 9))
