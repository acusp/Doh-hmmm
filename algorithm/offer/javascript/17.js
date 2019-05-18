/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function HasSubtree(pRoot1, pRoot2) {
    // write code here
    let result = false;
    if (pRoot1 && pRoot2) {
        if (pRoot1.val === pRoot2.val) {
            result = isMatch(pRoot1, pRoot2);
        }
        if (!result) {
            result = HasSubtree(pRoot1.left, pRoot2);
        }
        if (!result) {
            result = HasSubtree(pRoot1.right, pRoot2);
        }
    }

    return result;
}

function isMatch(tree1, tree2) {
    if (!tree1.val) {
        return false;
    }
    if (!tree2.val) {
        return true;
    }
    if (tree1.val !== tree2.val) {
        return false;
    }

    return isMatch(tree1.left, tree2.left) && 
           isMatch(tree1.right, tree2.right);
}