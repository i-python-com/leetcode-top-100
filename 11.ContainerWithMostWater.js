/*----------------------------Array, two pointer
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0
  for (let low = 0, high = height.length - 1; low < high; ) {
    let area = (high - low) * Math.min(height[low], height[high])
    if (max < area) max = area
    if (height[low] > height[high]) high--
    else low++
  }
  return max
}

/*-----------------------------------------------No.2
var maxArea = function(height) {
  let l = 0
  let r = height.length - 1
  let area = 0

  while (l < r) {
    area = Math.max(area, Math.min(height[l], height[r]) * (r - l))

    if (height[l] < height[r]) {
      l++
    } else {
      r--
    }
  }

  return area
}
*/
