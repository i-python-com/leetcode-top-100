/*---------------------------array, two pointer, stack
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  const stack = []
  let max = 0

  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      const area = getArea(heights, stack, i)
      max = Math.max(max, area)
    }
    stack.push(i)
  }

  while (stack.length) {
    const area = getArea(heights, stack, heights.length)

    max = Math.max(max, area)
  }

  return max
}

function getArea(heights, stack, i) {
  const height = heights[stack.pop()]
  const width = stack.length ? i - stack[stack.length - 1] - 1 : i
  const area = width * height
  return area
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))

/*---------------------------------------------------------No.2
var largestRectangleArea = function(heights) {
  let stack = []
  let maxRect = 0
  heights.forEach((rect, i) => {
    let item = {
      position: i,
      size: rect
    }
    if (stack.length === 0) {
      stack.push(item)
    } else {
      while (stack.length > 0 && stack[stack.length - 1].size >= rect) {
        // pop and calculate max rectangle.
        let poppedRect = stack.pop()
        item.position = poppedRect.position // rectangle start position.
        maxRect = Math.max(maxRect, poppedRect.size * (i - poppedRect.position))
      }
      stack.push(item)
    }
  })
  //remaining stack means we have still uncalculated rectangles.
  while (stack.length > 0) {
    let poppedRect = stack.pop()
    maxRect = Math.max(
      maxRect,
      poppedRect.size * (heights.length - poppedRect.position)
    )
  }
  return maxRect
}
*/
