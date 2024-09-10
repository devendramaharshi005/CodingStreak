{/*

    2326. Spiral Matrix IV
Solved
Medium
Topics
Companies
Hint

You are given two integers m and n, which represent the dimensions of a matrix.

You are also given the head of a linked list of integers.

Generate an m x n matrix that contains the integers in the linked list presented in spiral order (clockwise), starting from the top-left of the matrix. If there are remaining empty spaces, fill them with -1.

Return the generated matrix.

 

Example 1:

Input: m = 3, n = 5, head = [3,0,2,6,8,1,7,9,4,2,5,5,0]
Output: [[3,0,2,6,8],[5,0,-1,-1,1],[5,2,4,9,7]]
Explanation: The diagram above shows how the values are printed in the matrix.
Note that the remaining spaces in the matrix are filled with -1.

Example 2:

Input: m = 1, n = 4, head = [0,1,2]
Output: [[0,1,2,-1]]
Explanation: The diagram above shows how the values are printed from left to right in the matrix.
The last space in the matrix is set to -1.

 

Constraints:

    1 <= m, n <= 105
    1 <= m * n <= 105
    The number of nodes in the list is in the range [1, m * n].
    0 <= Node.val <= 1000

Seen this question in a real interview before?
1/5
Yes
No
Accepted
153.1K
Submissions
185.6K
Acceptance Rate
82.5%
Topics
Array
Linked List
Matrix
Simulation
Companies
Hint 1
First, generate an m x n matrix filled with -1s.
Hint 2
Navigate within the matrix at (i, j) with the help of a direction vector ⟨di, dj⟩. At (i, j), you need to decide if you can keep going in the current direction.
Hint 3
If you cannot keep going, rotate the direction vector clockwise by 90 degrees.
Similar Questions
Spiral Matrix
Medium
Spiral Matrix II
Medium
Spiral Matrix III
Medium
Discussion (94)
*/}


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */

const changeDirection = (currentDirection) => {
    return (currentDirection + 1) % 4;
}

const move = (direction, [x, y]) => {
    if (direction === 0) {
        return [x, y + 1]; // right
    } else if (direction === 1) {
        return [x + 1, y]; // down
    } else if (direction === 2) {
        return [x, y - 1]; // left
    } else if (direction === 3) {
        return [x - 1, y]; // up
    }
}

var spiralMatrix = function(m, n, head) {
    // 0 -> right, 1 -> down, 2 -> left, 3 -> up
    
    const answerArray = Array.from({length: m}, () => Array(n).fill(-1));
    let direction = 0;
    let coordinates = [0, 0];
    
    while (head) {
        let [x, y] = coordinates;
        answerArray[x][y] = head.val;
        head = head.next;

        let [nextX, nextY] = move(direction, coordinates);
        if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n || answerArray[nextX][nextY] !== -1) {
            direction = changeDirection(direction);
            [nextX, nextY] = move(direction, coordinates);
        }

        if (nextX >= 0 && nextX < m && nextY >= 0 && nextY < n && answerArray[nextX][nextY] === -1) {
            coordinates = [nextX, nextY];
        } else {
            break;
        }
    }
    
    return answerArray;
};