/*----------------------RegExp
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  return new RegExp('^' + p + '$').test(s)
  // return s.search(new RegExp('^'+p+'$')) !== -1
}

/*-----------------------------------------------No.2
var isMatch = function(s, p) {
  const match = s.match(new RegExp(p))
  return (!match || match[0].length !== s.length) ? false : true
}
*/
