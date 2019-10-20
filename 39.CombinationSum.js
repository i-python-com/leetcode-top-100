/*-------------------------array, backtracking
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = []

  candidates.sort((a, b) => a - b)

  function find(rest, combo, i) {
    if (rest === 0) {
      return result.push(combo)
    } else if (rest < 0) {
      return
    } else {
      while (i < candidates.length && rest - candidates[i] >= 0) {
        find(rest - candidates[i], [...combo, candidates[i]], i)
        i++
      }
    }
  }

  find(target, [], 0)

  return result
}

/*-----------------------------------------------------No.2
var combinationSum = function(candidates, target) {
  const result = []

  for (let i = 0; i < candidates.length; i++) {
    backtracking(candidates, result, i, [], 0, target)
  }

  return result
}

function backtracking(candidates, result, index, tempArr, tempSum, target) {
  let candidate = index < candidates.length ? candidates[index] : null
  const newArr = [...tempArr, candidate]
  let newSum = tempSum + candidate

  if (!candidate) return
  if (newSum > target) return
  if (newSum === target) return result.push(newArr)

  backtracking(candidates, result, index, newArr, newSum, target)

  for (let i = index + 1; i < candidates.length; i++) {
    backtracking(candidates, result, i, newArr, newSum, target)
  }
}
*/
