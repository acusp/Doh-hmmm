class ListNode {
    constructor(x) {
        this.val = x;
        this.next = null;
    }
}

// Method one:
function Merge1(pHead1, pHead2) {
    let head = pHead1;
    let pre = pHead1;

    while (pHead1 && pHead2) {
        if (pHead1.val < pHead2.val) {
            pre = pHead1;
            pHead1 = pHead1.next;
        } else {
            if (pre === pHead1) {
                pre = pHead2;
                head = pre;
            } else {
                pre.next = pHead2;
                pre = pre.next;
            }
            pHead2 = pHead2.next;
            pre.next = pHead1;
        }
    }
    if (pHead2) {
        if (pre) {
            pre.next = pHead2;
        } else {
            return pHead2;
        } 
    }

    return head;
}

// Method two: use recursive
function Merge2(pHead1, pHead2) {
    if (!pHead1) {
        return pHead2;
    }
    if (!pHead2) {
        return pHead1;
    }

    let head;

    if (pHead1.val <= pHead2.val) {
        head = pHead1;
        head.next = Merge2(pHead1.next, pHead2);
    } else {
        head = pHead2;
        head.next = Merge2(pHead1, pHead2.next);
    }

    return head;
}

// text
function printList(head) {
    while (head) {
        console.log(head.val);
        head = head.next;
    }
}

let head1 = new ListNode(1);
let a = new ListNode(3);
let b = new ListNode(5);
head1.next = a;
a.next = b;

let head2 = new ListNode(1);
let x = new ListNode(3);
let y = new ListNode(5);
head2.next = x;
x.next = y;

// printList(Merge1(head1, head2));
printList(Merge2(head1, head2));
