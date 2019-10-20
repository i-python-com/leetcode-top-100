/*-------------------------linked list, divide and conquer
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists.length === 0) return null
  if (lists.length === 1) return lists[0]
  let merged = [],
    list1,
    list2
  while (lists.length > 1) {
    do {
      list1 = lists.pop()
      list2 = lists.pop()
      merged.push(merge2Lists(list1, list2))
    } while (lists.length > 1)
    if (lists.length) merged.push(lists.pop())

    let temp = lists
    lists = merged
    merged = temp
  }
  return lists[0]
}

function merge2Lists(l1, l2) {
  if (!l1) return l2
  if (!l2) return l1

  const root = l1.val <= l2.val ? l1 : l2
  if (root === l1) {
    l1 = l1.next
  } else {
    l2 = l2.next
  }

  let tail = root

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      tail.next = l1
      l1 = l1.next
    } else {
      tail.next = l2
      l2 = l2.next
    }
    tail = tail.next
  }

  tail.next = l1 || l2
  return root
}

/*----------------------------------------No.2, loop find min head
var mergeKLists = function(lists) {
  let size = lists.length,
    result = new ListNode(),
    current = result,
    allDone = false
  while (!allDone) {
    let min = Infinity,
      minIndex = -1,
      done = true
    // find minimum value and index and keep track of done indicator
    for (let i = 0; i < size; i++) {
      if (lists[i] && lists[i].val < min) {
        min = lists[i].val
        minIndex = i
        done = false
      }
    }
    allDone = done
    if (minIndex > -1) {
      current.next = lists[minIndex]
      current = current.next
      lists[minIndex] = lists[minIndex].next
    }
  }
  return result.next
}
*/
