/*------------------------------------tree, depth first, breadth first, queue
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
var isSymmetric = function(root) {
  if (!root) return true

  function traverse(left, right) {
    if (left === null && right === null) return true
    if (left === null || right === null) return false
    if (left.val !== right.val) return false
    return traverse(left.left, right.right) && traverse(left.right, right.left)
  }

  return traverse(root.left, root.right)
}

/*----------------------------------------No.2, breadth first, queue
var isSymmetric = function(root) {
  if (root == null) return true
  let queue = []
  queue.push(root.left)
  queue.push(root.right)

  while (queue.length) {
    let leftNode = queue.shift()
    let rightNode = queue.shift()
    if (!leftNode && !rightNode) continue
    if (!leftNode || !rightNode) return false
    if (leftNode.val !== rightNode.val) return false
    queue.push(leftNode.left)
    queue.push(rightNode.right)
    queue.push(leftNode.right)
    queue.push(rightNode.left)
  }

  return true
}
*/
