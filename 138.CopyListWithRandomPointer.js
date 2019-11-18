/*------------------------------------liked list clone
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  const map = new Map()

  function copy(node) {
    if (node == null) return null
    if (map.get(node) != null) return map.get(node)

    const n = new Node(node.val)
    map.set(node, n)

    n.next = copy(node.next)
    n.random = copy(node.random)
    return n
  }

  return copy(head)
}

/*---------------------------------------No.2
var copyRandomList = function(head) {
  if (head == null) return null
  let visited = new Map()
  let oldNode = head
  let newNode = new Node(head.val)
  visited.set(oldNode, newNode)

  function getNode(node) {
    if (!node) return null
    if (visited.has(node)) return visited.get(node)
    visited.set(node, new Node(node.val))
    return visited.get(node)
  }

  while (oldNode) {
    newNode.next = getNode(oldNode.next)
    newNode.random = getNode(oldNode.random)
    newNode = newNode.next
    oldNode = oldNode.next
  }

  return visited.get(head)
}
*/
