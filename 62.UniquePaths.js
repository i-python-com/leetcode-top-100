/*---------------------------array, dynamic programming, permutation
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let res = []
  if (m <= 1 || n <= 1) return 1
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (!res[i]) res[i] = []
      if (!res[i - 1]) res[i - 1] = []

      res[i][j] = (res[i - 1][j] || 1) + (res[i][j - 1] || 1)
    }
  }

  return res[m - 1][n - 1]
}

console.log(uniquePaths(7, 3))

/*---------------------------------------------------------No.2
// total n same letters
// chose x letters to different same letters
// how many permutation(unique word)
// n! / x! * (n - x)!
// (x + 1) * (x + 2) * ... * n / 2 * 3 * ... * (n - x)
// n = 7, x = 3 < (n - x) = 4
// (4 * 5 * 6 * 7) / (2 * 3 * 4)

var uniquePaths = function(m, n) {
  const partialFactorial = (start, end) => {
    let res = 1
    for (let i = start; i <= end; i++) res *= i
    return res
  }
  const [big, small] = m > n ? [m, n] : [n, m]
  return partialFactorial(small, small + big - 2) / partialFactorial(2, big - 1)
}
*/
