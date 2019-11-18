/*------------------------------------binary tree, breadth first search
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
var maxDepth = function(root) {
  let maxLevel = 0

  const dfs = (node, level) => {
    if (node == null) return
    if (level > maxLevel) maxLevel = level
    dfs(node.left, level + 1)
    dfs(node.right, level + 1)
  }

  dfs(root, 1)
  return maxLevel
}

/*----------------------------------------No.2
var maxDepth = function(root) {
  if (root == null) return 0
  let left = maxDepth(root.left)
  let right = maxDepth(root.right)

  if (left > right) {
    return left + 1
  } else {
    return right + 1
  }
}
*/
