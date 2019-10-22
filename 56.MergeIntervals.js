/*---------------------------array, sort, interval
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let result = []

  for (let i = 0; i < intervals.length; i++) {
    if (result.length === 0) {
      result.push(intervals[i])
    } else {
      let j = result.length - 1
      if (result[j][1] >= intervals[i][0]) {
        result[j][1] = Math.max(result[j][1], intervals[i][1])
      } else {
        result.push(intervals[i])
      }
    }
  }

  return result
}

console.log(merge([[1, 4], [4, 5]]))

/*---------------------------------------------------------No.2
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let results = []
  let len = intervals.length
  intervals.reduce((pre, cur, idx) => {
    let merged
    if (pre[1] >= cur[0]) {
      merged = [pre[0], Math.max(pre[1], cur[1])]
    } else {
      results.push(pre)
      merged = cur
    }
    if (len - 1 === idx) {
      results.push(merged)
    } else {
      return merged
    }
  }, intervals[0])
  return results
}
*/
