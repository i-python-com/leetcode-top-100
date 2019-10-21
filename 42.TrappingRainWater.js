/*---------------------------array, two pointer, stack
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (height.length < 3) return 0
  let water = 0
  let maxIndex = height.indexOf(Math.max(...height))
  let i
  let currentMax = height[0]
  for (i = 1; i < maxIndex; i++) {
    if (height[i] < currentMax) water += currentMax - height[i]
    else currentMax = height[i]
  }

  currentMax = height[height.length - 1]
  for (i = height.length - 2; i > maxIndex; i--) {
    if (height[i] < currentMax) water += currentMax - height[i]
    else currentMax = height[i]
  }
  return water
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))

/*---------------------------------------------------------No.2
const trap = heights => {
  const stack = []
  let result = 0
  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] < heights[i]) {
      let centerIndex = stack.pop()
      let center = heights[centerIndex]
      if (stack.length > 0) {
        let left = heights[stack[stack.length - 1]]
        let right = heights[i]
        result +=
          Math.min(left - center, right - center) *
          (i - stack[stack.length - 1] - 1)
        console.log(
          `centerIndex: ${centerIndex}`,
          Math.min(left - center, right - center) *
            (i - stack[stack.length - 1] - 1)
        )
      }
    }
    stack.push(i)
  }
  return result
}
*/
