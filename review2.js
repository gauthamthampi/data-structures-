class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Stack{
    constructor(maxsize = 10){
        this.size = 0
        this.maxsize = 10
        this.top = null
    }

    isEmpty(){
        return this.size===0
    }

    isFull(){
        return this.size===this.maxsize
    }

    push(data){
        const newNode = new Node(data);
        if(this.isFull()){
            return "Stack overflow"
        }else{
            newNode.next = this.top
            this.top = newNode
        }
        this.size++
    }

    pop(){
        if(this.isEmpty()){
            return "Stack underflow"
        }else{
            this.top = this.top.next;
        }
        this.size--;
    }
}

// const stack = new Stack()
// stack.push(1)
// stack.push(2)
// stack.pop()



function InsertionSort(arr){
    for(let i=0;i<arr.length;i++){
        let value = arr[i]
        let j = i - 1
        while(j>=0 && arr[j]>value){
            arr[j+1] = arr[j]
            j = j -1
        }
        arr[j+1] = value
    }
    return arr;
}
let arr = [9,8,6,5,4,3]
console.log(InsertionSort(arr));