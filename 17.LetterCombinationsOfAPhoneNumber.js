/*-------------------------String, backtracking, recursion, permutation, combination
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) return []
  let map = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  }
  let finalArr = []
  let pair = ''
  let i = 0
  countPairs(digits, pair, finalArr, map, i)
  return finalArr
}

var countPairs = function(digits, pair, finalArr, map, i) {
  let char = digits[i]
  i++
  if (!char) {
    finalArr.push(pair)
    return
  }
  let arr = map[char]

  let j = 0
  while (arr[j]) {
    let str = pair + arr[j]
    j++
    countPairs(digits, str, finalArr, map, i)
  }
}

console.log(letterCombinations('23'))

/*-----------------------------------------------No.2
var letterCombinations = function(digits) {
  if (!digits) return []
  const letters = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

  let pair = ''
  const results = []

  function findCombo(index, pair) {
    if (index == digits.length) {
      results.push(pair)
      return
    }

    const digit = digits[index]
    const digitIndex = digit - 2
    for (let j = 0; j < letters[digitIndex].length; j++) {
      let str = pair + letters[digitIndex][j]
      findCombo(index + 1, str)
    }
  }

  findCombo(0, pair)
  return results
}
*/
