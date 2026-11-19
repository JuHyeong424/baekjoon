/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteMiddle(head: ListNode | null): ListNode | null {
    let length = 0;
    let current = head;

// 길이 구하기
    while (current !== null) {
        length++;
        current = current.next;
    }

    if (length === 1) return head.next;

// 중앙 찾기
    const middle = Math.floor(length / 2);

// 다시 처음부터
    current = head;
    let prev = null;

// 중앙값 이전까지 이동 
    for (let i = 0; i < middle; i++) {
        prev = current;
        current = current.next;
    }

// 중앙값 이후부터 다시 연결
    if (prev !== null && current !== null) {
        prev.next = current.next;
    }
    return head;
};