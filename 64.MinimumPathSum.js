/*---------------------------array, dynamic programming, matrix
 * @param {number[][]} grid
 * @return {number}
 */

var minPathSum = function(grid) {
  const dp = new Array(grid.length)
  for (let i = 0; i < grid.length; i++) {
    dp[i] = new Array(grid[0].length)
    dp[i].fill(0)
  }
  dp[0][0] = grid[0][0]
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (i === 0 && j === 0) {
        continue
      }
      if (i === 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j]
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
      }
    }
  }
  return dp[grid.length - 1][grid[0].length - 1]
}

let matrix = [[1, 3, 1], [1, 5, 1], [4, 2, 1]]

console.log(minPathSum(matrix))

/*---------------------------------------------------------No.2
var minPathSum = function(grid) {
  let m = grid.length
  let n = grid[0].length

  let dp = new Array(m + 1).fill([])
  dp.forEach((row, i) => (dp[i] = new Array(n + 1).fill(0)))

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 1) {
        dp[i][j] = dp[i][j - 1] + grid[i - 1][j - 1]
      } else if (i !== 1 && j === 1) {
        dp[i][j] = dp[i - 1][j] + grid[i - 1][j - 1]
      } else {
        let moveDown = dp[i - 1][j] + grid[i - 1][j - 1]
        let moveRight = dp[i][j - 1] + grid[i - 1][j - 1]
        dp[i][j] = Math.min(moveDown, moveRight)
      }
    }
  }

  return dp[m][n]
}
*/
