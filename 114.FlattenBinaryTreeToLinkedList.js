/*------------------------------------binary tree flatten to linked list
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  let stack = []

  function rec(root) {
    if (root) {
      if (root.right) stack.push(root.right)
      root.right = root.left
      root.left = null
      if (!root.right) root.right = stack.pop()
      rec(root.right)
    }
  }

  rec(root)
}

/*---------------------------------------No.2
var flatten = function(root) {
  if (root == null) return null
  let stack = []

  while (root != null) {
    if (root.right) stack.push(root.right)
    root.right = root.left
    root.left = null
    if (root.right == null) root.right = stack.pop()

    root = root.right
  }
}
*/
