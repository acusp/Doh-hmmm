/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function Mirror(root) {
    if (!root) {
        return null;
    }

    [root.left, root.right] = [root.right, root.left];

    Mirror(root.left);
    Mirror(root.right);

    return root;
}