/*-----------------------------------linked list, two pointer
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head.next && n === 1) return null
  let prevN = new ListNode(0)
  prevN.next = head
  let currN = head
  let endN = head
  while (n - 1 > 0) {
    endN = endN.next
    n--
  }

  while (endN.next) {
    prevN = prevN.next
    currN = currN.next
    endN = endN.next
  }
  if (prevN.val === 0) {
    currN.val = currN.next.val
    currN.next = currN.next.next
  } else {
    prevN.next = currN.next
  }

  return head
}
