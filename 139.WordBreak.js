/*--------------------------------string, dynamic programming
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// find one word, search the rest of substring
// if the final rest of substring not in wordDict
// after for loop, return false, memo[0] still false
// if the final rest of substring in wordDict, all return true
var wordBreak = function(s, wordDict) {
  var memo = []

  var recur = function(index) {
    if (memo[index] != null) return memo[index] // deal with repeat word
    if (index == s.length) return true // final rest substring in wordDict

    for (let end = index + 1; end <= s.length; end++) {
      if (wordDict.includes(s.substring(index, end)) && recur(end)) {
        memo[index] = true
        return true
      } else {
        memo[index] = false
      }
    }
    return false
  }
  recur(0)
  return memo[0]
}

console.log(wordBreak('leetcode', ['leet', 'code']))

/*----------------------------------------No.2, loop, bottom up
// from end to start, j should be a word end index + 1 and
// j should be a word start index
var wordBreak = function(s, wordDict) {
  dp = new Array(s.length + 1).fill(false)
  dp[dp.length - 1] = true
  for (let i = dp.length - 2; i > -1; i--) {
    for (let j = i + 1; j < dp.length; j++) {
      if (dp[j] && wordDict.includes(s.substring(i, j))) {
        dp[i] = true
        break
      }
    }
  }
  return dp[0]
};
*/
