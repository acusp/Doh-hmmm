function ListNode(x) {
    this.val = x;
    this.next = null;
}

function printListFromTailToHead(head) {
    // write code here

    let headToTail = [];
    let pNode = head;
    while (null !== pNode) {
        headToTail.push(pNode.val);
        pNode = pNode.next;
    }
    
    return headToTail.reverse();
}

// test result, input: {12, 28, 3}
let head = new ListNode(12);
let node1 = new ListNode(28);
let node2 = new ListNode(3);
head.next = node1;
node1.next = node2;
console.log(printListFromTailToHead(head));