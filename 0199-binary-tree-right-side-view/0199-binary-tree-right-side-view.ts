/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rightSideView(root: TreeNode | null): number[] {
    if (!root) return [];

    const answer = [];
    const queue = [root];

    while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
        const current = queue.shift()!;

        if (i === size - 1) {
            answer.push(current.val);
        }


        if (current.left) {
            queue.push(current.left);
        }

        if (current.right) {
            queue.push(current.right);
        }
    }
}

    return answer;

};