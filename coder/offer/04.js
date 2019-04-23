function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function reConstructBinaryTree(pre, vin)
{
    if (pre.length === 0 || vin.length === 0) {
        return null;
    }

    let root = new TreeNode(pre[0]);
    // Find the locaton of the root node in vin
    let loc = vin.indexOf(pre[0]);

    // Divide the left and right subtrees of pre and vin
    let preLeftTree = pre.slice(1, loc+1);
    let preRightTree = pre.slice(loc+1);
    let vinLeftTree = vin.slice(0, loc);
    let vinRightTree = vin.slice(loc+1);
    
    // Call function reConstructBinaryTree recursively
    root.left = reConstructBinaryTree(preLeftTree, vinLeftTree);
    root.right = reConstructBinaryTree(preRightTree, vinRightTree);
    
    return root;
}

// test
