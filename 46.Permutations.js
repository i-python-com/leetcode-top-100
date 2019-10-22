/*---------------------------Permutation, backtracking, Set ordered by insertion
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let result = []

  function recursion(arr, set = new Set()) {
    if (set.size === arr.length) return result.push([...set])

    for (let i = 0; i < arr.length; i++) {
      if (set.has(arr[i])) continue
      set.add(arr[i])
      recursion(arr, set)
      set.delete(arr[i])
    }
  }

  recursion(nums)

  return result
}

console.log(permute([1, 2, 3]))

/*---------------------------------------------------------No.2
var permute = function(nums) {
  let result = []

  function recursion(visited = new Set(), currCombo = []) {
    if (currCombo.length === nums.length) return result.push(currCombo)

    for (let i = 0; i < nums.length; i++) {
      if (!visited.has(i)) {
        recursion(new Set([...visited, i]), [...currCombo, nums[i]])
      }
    }
  }

  recursion()

  return result
}
*/
