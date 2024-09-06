{
  /*
3217. Delete Nodes From Linked List Present in Array
Solved
Medium
Topics
Companies
Hint

You are given an array of integers nums and the head of a linked list. Return the head of the modified linked list after removing all nodes from the linked list that have a value that exists in nums.

 

Example 1:

Input: nums = [1,2,3], head = [1,2,3,4,5]

Output: [4,5]

Explanation:

Remove the nodes with values 1, 2, and 3.

Example 2:

Input: nums = [1], head = [1,2,1,2,1,2]

Output: [2,2,2]

Explanation:

Remove the nodes with value 1.

Example 3:

Input: nums = [5], head = [1,2,3,4]

Output: [1,2,3,4]

Explanation:

No node has value 5.

 

Constraints:

    1 <= nums.length <= 105
    1 <= nums[i] <= 105
    All elements in nums are unique.
    The number of nodes in the given list is in the range [1, 105].
    1 <= Node.val <= 105
    The input is generated such that there is at least one node in the linked list that has a value not present in nums.



 */
}
function deleteNodeFromLinkedList(nums, listHead) {
  // Convert nums to a Set for O(1) lookup
  const numSet = new Set(nums);

  if (listHead === null) return null;

  // Remove nodes from the beginning if they're in numSet
  while (listHead !== null && numSet.has(listHead.val)) {
    listHead = listHead.next;
  }

  let current = listHead;

  // Remove nodes from the rest of the list if they're in numSet
  while (current !== null && current.next !== null) {
    if (numSet.has(current.next.val)) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return listHead;
}
var modifiedList = function (nums, head) {
  // const listHead=createLinkedList(head)

  const deletedListHead = deleteNodeFromLinkedList(nums, head);

  // traversing on linkedlist
  // let temp = deletedListHead;
  // while(temp){
  // console.log(temp.val)
  // temp=temp.next;
  // }

  return deletedListHead;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function addNode(head, val) {
  const list_node = new ListNode(val);
  let temp = head;
  while (temp && temp.next !== null) {
    temp = temp.next;
  }
  temp.next = list_node;
}

function createLinkedList(head) {
  if (!head || head.length === 0) {
    return null;
  }

  let listHead = null;
  head.forEach((e, index) => {
    if (index === 0) {
      listHead = new ListNode(e);
    } else {
      addNode(listHead, e);
    }
  });

  return listHead;
}

var modifiedList = function (nums, head) {
  const listHead = createLinkedList(head);

  const deletedListHead = deleteNodeFromLinkedList(nums, listHead);

  // traversing on linkedlist
  let temp = deletedListHead;
  while (temp) {
    console.log(temp.val);
    temp = temp.next;
  }
};

modifiedList([1, 2, 3], [1, 2, 4, 3, 4, 5]);
