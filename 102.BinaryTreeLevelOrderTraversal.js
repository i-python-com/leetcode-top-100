/*------------------------------------binary tree, breadth first, queue
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return []

  let queue = [root]
  let result = []

  while (queue.length) {
    // loop tree's level
    let size = queue.length
    let values = []

    for (let i = 0; i < size; i++) {
      // loop each node at same level
      let node = queue.shift()
      values.push(node.val)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    result.push(values)
  }

  return result
}

/*----------------------------------------No.2, recursion
var levelOrder = function(root) {
  if (!root) {
    return []
  }
  let result = [[]]

  let recursion = (root, level, result) => {
    if (!root) {
      return
    }
    if (result.length === level) {
      result.push([])
    }
    result[level].push(root.val)
    recursion(root.left, level + 1, result)
    recursion(root.right, level + 1, result)
  }

  recursion(root, 0, result)

  return result
}
*/
