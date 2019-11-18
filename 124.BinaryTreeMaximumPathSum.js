/*------------------------------------binary tree, deepth-first serch, maximum path
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  let maxVal = -Infinity

  function recursive(node) {
    if (node == null) return 0

    let left = Math.max(0, recursive(node.left))
    let right = Math.max(0, recursive(node.right))

    maxVal = Math.max(left + right + node.val, maxVal)

    return Math.max(left, right) + node.val // maximum path, so return current plus left or right
  }

  recursive(root)

  return maxVal
}
