/*------------------------------------binary tree, dynamic programming
 * @param {number} n
 * @return {number}
 */
// for each root of 1 to n
// we need to know the number of left-subtrees and right-subtrees
// the number of unique BST = number of left-subtrees * number of right-subtrees
// [1,1,2,5,14]
var numTrees = function(n) {
  let dp = []
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = 0
    for (let j = 0; j <= i - 1; j++) {
      dp[i] += dp[j] * dp[i - j - 1]
    }
  }
  return dp[n]
}

console.log(numTrees(4))

/*----------------------------------------No.2, recursive
var numTrees = function(n) {
  let arr = new Array(n + 1).fill(0)
  arr[0] = arr[1] = 1

  const iter = n => {
    if (!arr[n])
      for (let i = 1; i <= n; i++) {
        arr[n] += iter(i - 1) * iter(n - i)
      }
    return arr[n]
  }

  iter(n)
  return arr[n]
}
*/
