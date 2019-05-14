/*function ListNode(x) {
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
    if (!pHead) {
        return null;
    }

    let pre = null;
    let back = pHead.next;

    while(back) {
        pHead.next = pre;
        pre = pHead;
        pHead = back;
        back = pHead.next;
    }
    pHead.next = pre;

    return pHead;
}