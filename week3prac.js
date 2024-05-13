// class Node{
//     constructor(data){
//         this.data = data
//         this.right = null
//         this.left = null
//     }
// }

// class binarySearchTree{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root===null
//     }

//     insert(data){
//         const newNode = new Node(data);
//         if(this.isEmpty()){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }

//     insertNode(root,node){
//         if(root.data>node.data){
//             if(root.left === null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }

//     search(root,value){
//      if(!root.data){
//         return false
//      }else{
//         if(root.data===value){
//             return true
//         }else if(root.data>value){
//            return this.search(root.left,value)
//         }else{
//             return this.search(root.right,value)
//         }
//      }
// }

// //preorder
//   preOrder(root){
//     if(root){
//         console.log(root.data);
//         this.preOrder(root.left)
//         this.preOrder(root.right)
//     }
//   }

//   //inOrder
//   inOrder(root){
//     if(root){
//         this.inOrder(root.left)
//         console.log(root.data);
//         this.inOrder(root.right)
//     }
//   }

//   //postorder
//   postOrder(root){
//     if(root){
//         this.postOrder(root.left)
//         this.postOrder(root.right)
//         console.log(root.data);
//     }
//   }

//   min(){
//     let curr = this.root
//     while(curr.left){
//         curr = curr.left
//     }
//     console.log(curr.data);
//   }
// }

// const tree =  new binarySearchTree();
// tree.insert(4)
// tree.insert(5)
// tree.insert(10)
// tree.insert(3)
// console.log(tree.search(tree.root,4))
// tree.preOrder(tree.root)
// tree.inOrder(tree.root)
// tree.postOrder(tree.root)
// tree.min()


// class Heap{
//     constructor(){
//         this.Heap = []
//     }

//     parentId(i){
//         return Math.floor((i-1)/2)
//     }

//     lchildId(i){
//         return i*2 + 1;
//     }
//     rchildId(i){
//         return i*2 + 2;
//     }

//     insert(data){
//         this.Heap.push(data)
//         this.heapifyUp();
//     }

//     heapifyUp(){
//         let  elementId = this.Heap.length - 1
//         let parentId = this.parentId(elementId)
//         while(this.Heap.length>0 && this.Heap[elementId]>this.Heap[parentId]){
//             [this.Heap[parentId],this.Heap[elementId]] = [this.Heap[elementId],this.Heap[parentId]]
//             elementId = parentId
//             parentId = this.parentId(elementId)
//         }
//     }

//     remove(){
//         if(this.Heap.length === 0){
//             return null
//         }
//         this.Heap[0] = this.Heap.pop()
//         this.heapifyDown(0)
//     }

//     heapifyDown(i){
//         let largest = i
//         const lchild = this.lchildId(i)
//         const rchild = this.rchildId(i)
//         if(this.Heap.length>0 && this.Heap[i]<this.Heap[lchild]){
//             largest = lchild
//         }
//         if(this.Heap.length>0 && this.Heap[largest]<this.Heap[rchild]){
//             largest = rchild
//         }
//         if(i != largest){
//             [this.Heap[i],this.Heap[largest]] = [this.Heap[largest],this.Heap[i]]
//             this.heapifyDown(largest)
//         }
//     }

//     isEmpty(){
//         return this.Heap.length === 0 
//     }

//     print(){
//         console.log(this.Heap);
//     }
// }

// function heapSort(arr){
//     const heap = new Heap()

//     arr.forEach(element => {
//         heap.insert(element)
//     });

//     for(let i=arr.length-1;i>=0;i--){
//         const max = heap.Heap[0]
//         arr[i] = max
//         heap.remove()
//     }
// }

// // Example usage:
// const array = [12, 11, 13, 5, 6, 7];
// console.log("Original Array:", array);
// heapSort(array);
// console.log("Sorted Array:", array);

// const heap = new Heap();
// heap.insert(2)
// heap.insert(7)
// heap.insert(3)
// heap.insert(9)
// heap.insert(1)
// heap.insert(8)
// heap.remove()
// heap.print()
// const arr = [heap.print()]
// console.log(heapSort(arr)); 

class Node{
    constructor(){
        this.children = {} 
        this.isEndWord = false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new Node()
            }
            node = node.children[char]
        }
        node.isEndWord = true
    }

    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.isEndWord
    }

    
}