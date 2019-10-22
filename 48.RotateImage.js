/*------------------------------array, multidimensional array traverse
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  for (let i = 0; i <= matrix.length / 2; i++) {
    for (let j = i; j < matrix.length - i - 1; j++) {
      swap(matrix, i, j)
    }
  }
}

var swap = function(matrix, i, j) {
  const n = matrix.length

  const temp = matrix[j][n - i - 1]
  matrix[j][n - i - 1] = matrix[i][j]
  matrix[i][j] = matrix[n - j - 1][i]
  matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1]
  matrix[n - i - 1][n - j - 1] = temp
}

let matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]

rotate(matrix)
console.log(matrix)

/*---------------------------------------------------------No.2
var rotate = function(matrix) {
  result = [];
  len = matrix.length;
  for(let i=0; i<len;i++{
      temp = [];
      for(j=len-1;j>=0;j--){
          temp.push(matrix[j][i])
      }
      result.push(temp)
  }
  for(let i in result){
      matrix[i] = result[i]
  }
};
*/
