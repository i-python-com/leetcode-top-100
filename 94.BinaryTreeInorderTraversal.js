/*------------------------------------binary tree, traverse, recursive, stack
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const result = []

  function traverse(node) {
    if (node == null) return
    traverse(node.left)
    result.push(node.val)
    traverse(node.right)
  }

  traverse(root)

  return result
}

/*----------------------------------------No.2, convert recursive to iterative
// traverse step(in order traverse)
// 1.traverse tree of left child
// 2.visit the current node, adding it to the result
// 3.traverse tree of right child
// while iterate(in order traverse)
// 1.action is visit or no children, push value to result
// 2.1.push right child & TRAVERSE action
// 2.2.push node & VISIT action
// 2.3.push left child & TRAVERSE action

var inorderTraversal = function(root) {
  if (!root) {
    return []
  }

  const TRAVERSE = 'TRAVERSE'
  const VISIT = 'VISIT'
  const stack = [{ node: root, action: TRAVERSE }]
  const result = []

  while (stack.length) {
    const { node, action } = stack.pop()
    // if action is to visit or node has no children
    if (action === VISIT || (!node.left && !node.right)) {
      result.push(node.val)
    } else {
      // traverse right
      if (node.right) {
        stack.push({ node: node.right, action: TRAVERSE })
      }
      // visit current node
      stack.push({ node, action: VISIT })
      // traverse left
      if (node.left) {
        stack.push({ node: node.left, action: TRAVERSE })
      }
    }
  }

  return result
}
*/
