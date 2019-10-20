/*-------------------------String, backtracking, recursion
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n === 0) return []
  let finalArr = []
  function pairing(str, open, close) {
    if (str.length === n * 2) return finalArr.push(str)
    if (open > close) pairing(str + ')', open, close + 1)
    if (open < n) pairing(str + '(', open + 1, close)
  }

  pairing('(', 1, 0)
  return finalArr
}

console.log(generateParenthesis(3))

/*----------------------------------------No.2, stack
var generateParenthesis = function(n) {
  if (!n) return ['']
  const init = {
    str: '',
    open: n,
    closed: n
  }
  const stack = [init]
  const sols = []

  while (stack.length) {
    const { str, open, closed } = stack.pop()
    if (open > 0) {
      const ctxAddedOpening = {
        str: str + '(',
        open: open - 1,
        closed
      }
      stack.push(ctxAddedOpening)
    }
    if (open < closed) {
      const newClosed = closed - 1
      const newStr = str + ')'
      if (newClosed) {
        const ctxAddedClosing = {
          str: newStr,
          open,
          closed: newClosed
        }
        stack.push(ctxAddedClosing)
      } else sols.push(newStr)
    }
  }
  return sols
}
*/
