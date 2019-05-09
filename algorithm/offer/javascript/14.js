function ListNode(x) {
    this.val = x;
    this.next = null;
}

/**
 * set two pointer: "pre" and "h"
 * they are "k" nodes between them
 */
function FindKthToTail(head, k) {
    let pre = head, h = head;
    while (h) {
        h = h.next;
        if (k > 0) {
            k = k - 1;
        } else {
            pre = pre.next; 
        }
    }
    if (k > 0) return null;
    return pre;
}