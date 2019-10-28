/*------------------------------------binary tree, depth first search
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  function check(root, minVal, maxVal) {
    if (!root) return true
    if (root.val <= minVal || root.val >= maxVal) return false
    return (
      check(root.left, minVal, root.val) && check(root.right, root.val, maxVal)
    )
  }
  return check(root, -Infinity, Infinity)
}
