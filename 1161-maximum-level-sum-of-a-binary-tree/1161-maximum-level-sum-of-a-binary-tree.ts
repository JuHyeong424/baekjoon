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

function maxLevelSum(root: TreeNode | null): number {
    const queue = [root];
    let max = -100000;
    let maxIndex = 0;
    let head = 0;

    while (queue.length > 0) {
        const length = queue.length;
        let sum = 0;

        for (let i = 0; i < length; i++) {
            const value = queue.shift();
            
            sum += value.val;
            
            const left = value.left ?? 0;
            const right = value.right ?? 0;
            if (value.left) queue.push(value.left);
            if (value.right) queue.push(value.right);
        }
        head += 1;

        console.log(max);
        console.log(sum);
        console.log(head);

        if (max < sum) {
            max = sum;
            maxIndex = head;
        }
    }

    return maxIndex;
};