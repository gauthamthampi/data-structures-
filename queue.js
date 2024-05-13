// //using array//////////////////////////////////////////////////
// class Queue{
//     constructor(){
//         this.items = [];
//     }

//     enqueue(element){
//         this.items.push(element)
//     }

//     dequeue(element){
//         this.items.shift()
//     }

//     print(){
//         console.log(this.items)
//     }

// }

// let Queue1 = new Queue()
// Queue1.enqueue(2)
// Queue1.enqueue(3)
// Queue1.enqueue(5)
// Queue1.dequeue()
// Queue1.print()



// //using linked list////////////////////////////////

// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class Queue{
//     constructor(maxSize){
//         this.front = null
//         this.rear = null
//         this.size = 0
//         this.maxSize = maxSize
//     }

//     enqueue(data){
      
//         const newNode = new Node(data);
//       if(this.isEmpty()){
//         this.front = newNode
//       }else{
//         this.rear.next = newNode 
//       }
//       this.rear = newNode
//       this.size++
//     }

//     isEmpty(){
//         return this.size===0
//     }

//     print(){
//         let curr = this.front
//         let list = ''
//         while(curr){
//             list += `${curr.data} `
//             curr = curr.next
//         }
//         console.log(list);
//     }
// }
// let maxSize = 5
// let queue = new Queue(maxSize)
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// queue.print()
// let arr = [1,2,3]
// console.log(arr.pop());


// class Queue{
//     constructor(size = 5){
//         this.size = size
//         this.items = []
//     }

//     enqueue(x){
//         this.items.push(x)
//     }

//     dequeue(){
//         this.items.pop()
//     }

//     print(){
//         console.log(this.items);
//     }
// }

// let queue = new Queue()
// queue.enqueue(1)
// queue.enqueue(2)
// queue.dequeue()
// queue.print()

class Node{
    constructor(data){
        this.data = data
        this.next  = null
    }
}

class Queue{
    constructor(maxSize=10){
        this.size = 0
        this.maxSize = maxSize
        this.front = null
        this.rear = null
    }
    isEmpty(){
        return this.size===0
    }
    
    enqueue(data){
        const newNode = new Node(data);
        if(this.isEmpty()){
            this.front = newNode
        }else{
            this.rear.next = newNode
        }
        this.rear = newNode
        this.size++
    }

    dequeue(){
        if(this.isEmpty()){
            console.log('Underflow');
        }else{
            let removed = this.front.data
            this.front = this.front.next
        }
        this.size--
        return removed;
    }

    print(){
        let list = ''
        let curr = this.front
        while(curr){
            list += `${curr.data} `
            curr = curr.next
        }
        console.log(list);
    }
}

let queue = new Queue()
queue.enqueue(3)
queue.enqueue(4)
queue.print()