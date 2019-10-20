/*-------------------------------------linked list(decimal carry)
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  return add(l1, l2, 0)

  function add(l1, l2, carry) {
    const v1 = (l1 && l1.val) || 0
    const v2 = (l2 && l2.val) || 0
    const sum = v1 + v2 + carry
    const newCarry = Math.floor(sum / 10)
    const val = sum % 10
    return l1 || l2 || carry
      ? { val, next: add(l1 && l1.next, l2 && l2.next, newCarry) }
      : null
  }
}

/*-----------------------------------------------No.2
var addTwoNumbers = function(l1, l2) {
  let res = new ListNode(-1),
    dummy = res,
    sum = 0,
    carry = 0

  while (l1 || l2 || sum > 0) {
    if (l1) {
      sum += l1.val
      l1 = l1.next
    }

    if (l2) {
      sum += l2.val
      l2 = l2.next
    }

    if (sum >= 10) {
      sum -= 10
      carry = 1
    }

    dummy.next = new ListNode(sum)
    dummy = dummy.next
    sum = carry
    carry = 0
  }
  return res.next
}
*/
