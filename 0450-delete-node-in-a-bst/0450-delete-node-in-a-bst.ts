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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) return null;

    if (key < root.val) {
        // 왼쪽 서브트리 탐색
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        // 오른쪽 서브트리 탐색
        root.right = deleteNode(root.right, key);
    } else {
        // 삭제할 노드를 찾음
        if (!root.left) return root.right;
        if (!root.right) return root.left;
        
        let right = root.right;

        while (right.left) {
            right = right.left;
        }

        root.val = right.val;
        root.right = deleteNode(root.right, right.val);
    }

    return root;
};