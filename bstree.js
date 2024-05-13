//binary search treee
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class binarySearchTree{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root===null;
    }

    printbool(){
        if(this.isEmpty()){
            console.log("Empty tree");
        }else{
            console.log("Tree has branches");
        }
    }

    insert(data){
        const newNode = new Node(data);
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

    search(root,value){
     if(!root.data){
        return false
     }else{
        if(root.data===value){
            return true
        }else if(root.data>value){
           return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }
     }
    }

    //dfs
    preorder(root){
        if(root){
            console.log(root.data);
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }

    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.data);
            this.inorder(root.right)
        }
    }

    postorder(root){
        if(root){
            this.inorder(root.left)
            this.inorder(root.right)
            console.log(root.data)
        }
    }

    //bfs
    leverOrder(){
        const queue = [];
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.data);
            if(curr.left != null){
                queue.push(curr.left)
            }
            if(curr.right!=null){
                queue.push(curr.right)
            }
        }
    }

    //min
    min(){
     let curr = this.root;
     while(curr.left){
        curr = curr.left
     }



     
     console.log(curr.data);
    }
    
    //max
    max(){
    let curr = this.root;
    while(curr.right){
        curr = curr.right
    }
    console.log(curr.data);
    }
}

const bst = new binarySearchTree()
bst.insert(5)
bst.insert(3)
bst.insert(1)
bst.insert(8)
bst.insert(5)
bst.insert(4)
bst.printbool()
// console.log(bst.search(bst.root,8));
// console.log(bst.preorder(bst.root));
// console.log(bst.root);
bst.leverOrder();
bst.min()
bst.max()
