// 1: DFS => Depth First Search
// inorder traversing => L N R
// preorder traversing => N L R
// postorder traversing => R L N
// ** L = Left, N = Node, R = Right

class MyNode {
  constructor(key) {
    this.key = key;
    this.left = this.right = null;
  }
}
/**
 * @param {MyNode} node
 */
const printInorder = (node) => {
  if (node === null) {
    return;
  }
  printInorder(node.left);
  console.log(node.key, ' ');
  printInorder(node.right);
};

/**
 * @param {MyNode} node
 */
const printPreorder = (node) => {
  if (node === null) {
    return;
  }
  console.log(node.key, ' ');
  printPreorder(node.left);
  printPreorder(node.right);
};

/**
 * @param {MyNode} node
 */
const printPostorder = (node) => {
  if (node === null) {
    return;
  }
  printPreorder(node.left);
  printPreorder(node.right);
  console.log(node.key, ' ');
};

const root = new MyNode(1);
root.left = new MyNode(2);
root.right = new MyNode(3);
root.left.left = new MyNode(40);
root.left.right = new MyNode(44);

console.log('\nInorder');
printInorder(root);

console.log('\nPreorder');
printPreorder(root);

console.log('\nPostorder');
printPostorder(root);
