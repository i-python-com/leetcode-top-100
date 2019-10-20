/*---------------------------center index, left, right, substring
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(str) {
  if (str.length < 2) return str

  let result = ''

  function expand(str, left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--, right++
    }
    return str.substring(left + 1, right)
  }

  for (let i = 0; i < str.length - 1; i++) {
    result = [result, expand(str, i, i), expand(str, i, i + 1)].reduce(
      (pre, cur) => (pre.length > cur.length ? pre : cur)
    )
  }

  return result
}

/*-----------------------------------------------No.2
var longestPalindrome = function(s) {
  var res = '',
    i = 0

  while (i < s.length) {
    var isInt = i.toString().indexOf('.'),
      start = isInt == -1 ? i : Math.floor(i),
      end = isInt == -1 ? i : Math.ceil(i),
      len = res.length

    while (start >= 0 && end < s.length && s[start] === s[end]) {
      if (end - start + 1 > len) {
        res = s.slice(start, end + 1)
      }
      start--
      end++
    }
    i += 0.5
  }

  return res
}
*/
console.log(longestPalindrome('babad'))
