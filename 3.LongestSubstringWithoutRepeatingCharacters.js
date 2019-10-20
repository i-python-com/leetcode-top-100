/*-----------------------index pointer
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let startIndex = 0,
    maxLength = 0
  let map = new Map() // key = s[i], value = i
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (map.get(char) >= startIndex) startIndex = map.get(char) + 1
    map.set(char, i)
    if (i - startIndex + 1 > maxLength) maxLength = i - startIndex + 1
  }

  return maxLength
}

/*-----------------------------------------------No.2
var lengthOfLongestSubstring = function(s) {
  let longest = 0
  let start = 0
  let length = 0
  let collection = {}
  let pos
  while ((pos = start + length) < s.length) {
    let char = s[pos]
    if (collection[char] == undefined || collection[char] < start) {
      collection[char] = pos
      length += 1
      if (length > longest) {
        longest = length
      }
    } else {
      length = pos - collection[char]
      collection[char] = pos
      start = pos - (length - 1)
    }
  }

  return longest
}
*/

console.log(lengthOfLongestSubstring('abcabcbb'))
