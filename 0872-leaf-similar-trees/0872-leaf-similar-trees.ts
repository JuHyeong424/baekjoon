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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const leaf1 = [];
    const stack1 = [root1];

    while (stack1.length > 0) {
        const node = stack1.pop();
        if (node === null || node === undefined) continue;

        if (node.right === null && node.left === null) {
            leaf1.push(node.val);
            continue;
        }

        if (node.right) stack1.push(node.right);
        if (node.left) stack1.push(node.left);
    }

    const leaf2 = [];
    const stack2 = [root2];

    while (stack2.length > 0) {
        const node = stack2.pop();

        if (node === null || node === undefined) continue;

        if (node.left === null && node.right === null) {
            leaf2.push(node.val);
            continue;
        }

        if (node.right) stack2.push(node.right);
        if (node.left) stack2.push(node.left);
    }

    if (leaf1.length !== leaf2.length) return false;
    for (let i = 0; i < leaf1.length; i++) {
        if (leaf1[i] !== leaf2[i]) return false;
    }

    return true;
};