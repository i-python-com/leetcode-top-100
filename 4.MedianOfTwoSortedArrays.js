/*---------------------------sort array return median
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  let newArr = []

  while (nums1.length && nums2.length) {
    if (nums1[0] < nums2[0]) {
      newArr.push(nums1.shift())
    } else newArr.push(nums2.shift())
  }
  newArr = [...newArr, ...nums1, ...nums2]

  let center = Math.floor(newArr.length / 2)

  if (newArr.length % 2 === 0) {
    return (newArr[center] + newArr[center - 1]) / 2
  }
  return newArr[center]
}

/*-----------------------------------------------No.2
var findMedianSortedArrays = function(nums1, nums2) {
  var compare = (i, j) => {
    return i - j
  }
  var arr = nums1.concat(nums2).sort(compare)
  if (arr.length % 2 == 0) {
    return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2
  }
  return arr[Math.floor(arr.length / 2)]
}
*/

console.log(findMedianSortedArrays([1, 2, 4], [3, 5, 6, 7]))
