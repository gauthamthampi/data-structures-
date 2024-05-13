// class Heap{
//     constructor(){
//         this.heap = [];
//     }

//     parentId(i){
//         return Math.floor((i-1)/2)
//     }

//     lchildId(i){
//         return i*2 + 1
//     }

//     rchildId(i){
//         return i*2+2
//     }
 
//     insert(data){
//         this.heap.push(data)
//         this.heapifyUp();
//     }

//     heapifyUp(){
//         let elementid = this.heap.length-1;
//         let parentid = this.parentId(elementid)
//         while(elementid>0 && this.heap[elementid] > this.heap[parentid]){
//             [this.heap[parentid],this.heap[elementid]] = [this.heap[elementid],this.heap[parentid]]
//             elementid = parentid
//             parentid = this.parentId(elementid)
//         }
//     }

//     remove(){
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown(0)
//     }

//     heapifyDown(index){
//         let lchild = this.lchildId(index)
//         let rchild = this.rchildId(index)
//         let large = index
//         if(this.heap.length>0 && this.heap[large]<this.heap[lchild]){
//             large = lchild
//         }

//         if(this.heap.length>0 && this.heap[large]<this.heap[rchild]){
//             large = rchild
//         }

//         if(large!=index){
//             [this.heap[index],this.heap[large]] = [this.heap[large],this.heap[index]]
//             this.heapifyDown(large)
//         }
//     }

//     print(){
//         console.log(this.heap);
//     }
// }

// const heap = new Heap();
// heap.insert(5)
// heap.insert(4)
// heap.insert(3)
// heap.insert(8)
// heap.insert(1)
// heap.insert(9)
// heap.insert(7)
// heap.insert(10)
// heap.remove()
// heap.print()



//priority queue
class Node{
    constructor(value,priority){
        this.value = value;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    parentId(i) {
        return Math.floor((i - 1) / 2);
    }

    lchildId(i) {
        return i * 2 + 1;
    }

    rchildId(i) {
        return i * 2 + 2;
    }

    enqueue(value, priority) {
        const newNode = new Node(value,priority);
        this.heap.push(newNode);
        this.heapifyUp();
    }
    

    heapifyUp() {
        let length = this.heap.length;
        let elementId = length - 1;
        let element = this.heap[elementId];
        let parentId = this.parentId(elementId);
        while (elementId > 0 && element.priority > this.heap[parentId].priority) {
            [this.heap[parentId], this.heap[elementId]] = [this.heap[elementId], this.heap[parentId]];
            elementId = parentId;
            parentId = this.parentId(elementId);
        }
    }
    
    dequeue() {
        if (this.heap.length === 0) {
            return null;
        }
        const root = this.heap[0];
        const lastNode = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = lastNode;
            this.heapifyDown(0);
        }
        return root;
    }
    heapifyDown(index) {
        let lchildId = this.lchildId(index);
        let rchildId = this.rchildId(index);
        let largest = index;
    
        if (lchildId < this.heap.length && this.heap[index].priority < this.heap[lchildId].priority) {
            largest = lchildId;
        }
    
        if (rchildId < this.heap.length && this.heap[largest].priority < this.heap[rchildId].priority) {
            largest = rchildId;
        }
    
        if (largest !== index) {
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            this.heapifyDown(largest);
        }
    }
    
    print() {
        console.log(this.heap.reverse());
    }
}

// Create an instance of the PriorityQueue class
const queue = new PriorityQueue();
queue.enqueue(4, 2);
queue.enqueue(5, 4);
queue.enqueue(2, 1);
queue.enqueue(1, 3);
queue.dequeue()
queue.print();



