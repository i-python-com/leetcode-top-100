/*-------------------------array, backtracking, Bit Manipulation
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let results = [[]]
  nums.forEach(element => {
    let tmp = results.map(res => [element, ...res])

    results = [...results, ...tmp]
  })

  return results
}

console.log(subsets([1, 2, 3]))

/*---------------------------------------------------------No.2
var subsets = function(nums) {
  return nums.reduce((ss,v)=>[...ss, ...ss.map(s=>[v, ...s])], [[]])
}
*/
