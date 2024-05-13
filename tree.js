//tree traversal
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// function preOrderTraversal(node) {
//     if (node !== null) {
//         console.log(node.value);
//         preOrderTraversal(node.left);
//         preOrderTraversal(node.right);
//     }
// }

// function inOrderTraversal(node) {
//     if (node !== null) {
//         inOrderTraversal(node.left);
//         console.log(node.value);
//         inOrderTraversal(node.right);
//     }
// }

// function postOrderTraversal(node) {
//     if (node !== null) {
//         postOrderTraversal(node.left);
//         postOrderTraversal(node.right);
//         console.log(node.value);
//     }
// }

// // Example tree
// let root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.left.right = new Node(5);

// console.log("Pre-order traversal:");
// preOrderTraversal(root);

// console.log("In-order traversal:");
// inOrderTraversal(root);

// console.log("Post-order traversal:");
// postOrderTraversal(root);

//bst
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BST {
//     constructor() {
//         this.root = null;
//     }

//     insert(value) {
//         this.root = this._insertRecursively(this.root, value);
//     }

//     _insertRecursively(node, value) {
//         if (node === null) {
//             return new Node(value);
//         }

//         if (value < node.value) {
//             node.left = this._insertRecursively(node.left, value);
//         } else {
//             node.right = this._insertRecursively(node.right, value);
//         }

//         return node;
//     }

//     search(value) {
//         return this._searchRecursively(this.root, value);
//     }

//     _searchRecursively(node, value) {
//         if (node === null || node.value === value) {
//             return node;
//         }

//         if (value < node.value) {
//             return this._searchRecursively(node.left, value);
//         } else {
//             return this._searchRecursively(node.right, value);
//         }
//     }
// }

// // Example BST
// let bst = new BST();
// bst.insert(5);
// bst.insert(3);
// bst.insert(7);
// bst.insert(2);
// bst.insert(4);

// console.log("Search for 4:", bst.search(4)); 
// console.log("Search for 6:", bst.search(6)); 

//height calc
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function treeHeight(node) {
    if (node === null) {
        return 0;
    }

    let leftHeight = treeHeight(node.left);
    let rightHeight = treeHeight(node.right);

    return 1 + Math.max(leftHeight, rightHeight);
}

// Example tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log("Tree height:", treeHeight(root)); // Output: 3

