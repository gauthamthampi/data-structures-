class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(data){
        const newNode = new Node(data)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,node){
        if(root.data>node.data){
            if(root.left === null){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right === null){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

    //traverse
    preOrder(root){
        if(root){
            console.log(root.data);
            this.preOrder(root.left)
            this.preOrder(root.right)
            
        }
        
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.data);
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.data);
        }
    }


}

const tree = new BinarySearchTree()
tree.insert(4)
tree.insert(8)
tree.insert(1)
tree.insert(6)
tree.insert(2)
tree.insert(9)
tree.insert(5)
tree.preOrder(tree.root)
console.log("PRE");
tree.inOrder(tree.root)
console.log("IN");
tree.postOrder(tree.root)
