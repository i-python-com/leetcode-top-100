/*---------------------------array, dynamic programming, matrix
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let n = word1.length
  let m = word2.length

  if (!n) return m
  if (!m) return n

  let dp = new Array(n + 1).map(row => row.fill(new Array(m + 1)))

  const minDistanceHelper = (n, m) => {
    if (!dp[n]) {
      dp[n] = []
    } else if (dp[n][m]) {
      return dp[n][m]
    }

    if (n === 0) {
      dp[n][m] = m
      return m
    } else if (m === 0) {
      dp[n][m] = n
      return n
    }

    if (word1.charAt(n - 1) !== word2.charAt(m - 1)) {
      return (dp[n][m] =
        1 +
        Math.min(
          minDistanceHelper(n - 1, m),
          minDistanceHelper(n, m - 1),
          minDistanceHelper(n - 1, m - 1)
        ))
    } else {
      dp[n][m] = minDistanceHelper(n - 1, m - 1)
    }

    return dp[n][m]
  }

  return minDistanceHelper(n, m)
}

console.log(minDistance('intention', 'execution'))
