/*------------------------------------binary tree construct, preorder, inorder
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  function helper(inorder) {
    if (!inorder || !inorder.length) return null

    let element = preorder.shift()
    let node = new TreeNode(element)
    let index = inorder.findIndex(e => e === element)

    node.left = helper(inorder.slice(0, index))
    node.right = helper(inorder.slice(index + 1))

    return node
  }

  return helper(inorder)
}

/*--------------------------------------------------------No.2
var buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null

  let result = new TreeNode(preorder.shift())

  // find center
  let i = inorder.indexOf(result.val)
  result.left = buildTree(preorder, inorder.slice(0, i))
  result.right = buildTree(preorder, inorder.slice(i + 1))

  return result
}
*/
