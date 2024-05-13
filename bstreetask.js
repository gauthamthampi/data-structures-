//1
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this._insertRecursively(this.root, value);
    }

    _insertRecursively(node, value) {
        if (node === null) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this._insertRecursively(node.left, value);
        } else {
            node.right = this._insertRecursively(node.right, value);
        }

        return node;
    }

    contains(value) {
        return this._containsRecursively(this.root, value);
    }

    _containsRecursively(node, value) {
        if (node === null) {
            return false;
        }

        if (node.value === value) {
            return true;
        } else if (value < node.value) {
            return this._containsRecursively(node.left, value);
        } else {
            return this._containsRecursively(node.right, value);
        }
    }

    delete(value) {
        this.root = this._deleteRecursively(this.root, value);
    }

    _deleteRecursively(node, value) {
        if (node === null) {
            return null;
        }

        if (value === node.value) {
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            } else {
                let minRight = this._findMin(node.right);
                node.value = minRight.value;
                node.right = this._deleteRecursively(node.right, minRight.value);
            }
        } else if (value < node.value) {
            node.left = this._deleteRecursively(node.left, value);
        } else {
            node.right = this._deleteRecursively(node.right, value);
        }

        return node;
    }

    _findMin(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    postOrderTraversal(node) {
        if (node !== null) {
            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);
            console.log(node.value);
        }
    }

    preOrderTraversal(node) {
        if (node !== null) {
            console.log(node.value);
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
    }

    inOrderTraversal(node) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}

// Example BST
let bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.insert(4);

console.log("Contains 4:", bst.contains(4)); // Output: true
console.log("Contains 6:", bst.contains(6)); // Output: false

console.log("Pre-order traversal:");
bst.preOrderTraversal(bst.root);

console.log("In-order traversal:");
bst.inOrderTraversal(bst.root);

console.log("Post-order traversal:");
bst.postOrderTraversal(bst.root);

bst.delete(3);
console.log("In-order traversal after deleting 3:");
bst.inOrderTraversal(bst.root);


//2
function findClosestValueInTree(tree, target) {
    return _findClosestValueInTree(tree.root, target, tree.root.value);
}

function _findClosestValueInTree(node, target, closest) {
    if (node === null) {
        return closest;
    }

    if (Math.abs(target - node.value) < Math.abs(target - closest)) {
        closest = node.value;
    }

    if (target < node.value) {
        return _findClosestValueInTree(node.left, target, closest);
    } else if (target > node.value) {
        return _findClosestValueInTree(node.right, target, closest);
    } else {
        return closest;
    }
}

// Using the same example BST from above
console.log("Closest value to 6:", findClosestValueInTree(bst, 6));

//3
function isValidBST(tree) {
    return _isValidBST(tree.root, -Infinity, Infinity);
}

function _isValidBST(node, min, max) {
    if (node === null) {
        return true;
    }

    if (node.value <= min || node.value >= max) {
        return false;
    }

    return _isValidBST(node.left, min, node.value) && _isValidBST(node.right, node.value, max);
}

// Example BST
let validBST = new BST();
validBST.insert(2);
validBST.insert(1);
validBST.insert(3);

let invalidBST = new BST();
invalidBST.root = new Node(5);
invalidBST.root.left = new Node(1);
invalidBST.root.right = new Node(4);
invalidBST.root.right.left = new Node(3);
invalidBST.root.right.right = new Node(6);

console.log("Valid BST:", isValidBST(validBST));   
console.log("Invalid BST:", isValidBST(invalidBST)); 

