// let t = -1 , MAX = 10 , arr = Array(MAX).fill(0)

// function push(x){
//     if(t>=MAX){
//        console.log("Stack Overflow");
//     //    return false;/
//     }else{
//        t += 1;
//        arr[t] = x
//        return true
//     }
// }

// function pop(){
//     if(t < 0){
//         console.log("Stack Underflow")
//         // return false
//     }else{
//         let x = arr[t]
//         t -= 1;
//         return x
//     }
// }

// function topElem(){
//     if(t<0){
//         console.log("Stack Underflow")
//         // return false
//     }else{
//         let x = arr[t]
//         return x;
//     }
// }

// function print(){
//     let array = []
//     for(let i=0;i<arr.length;i++){
//         array.push(arr[i])
//     }
//     return array;
// }

// // push(20)
// // push(30)
// // push(40)
// // push(50)
// // push(60)
// // push(70)
// // push("HELLO")
// // console.log(print());



// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class Stack{
//     constructor(){
//         this.top = null;
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size===0
//     }

//      push(data){
//         const newNode = new Node(data);
//         if(this.isEmpty()){
//             this.top = newNode
//         }else{
//             newNode.next = this.top
//             this.top = newNode
//         }
//         this.size++
//      }

//      print(){
//        let curr = this.top
//        let stack = ''
//        while(curr){
//         stack += `${curr.data} `
//         curr = curr.next
//        }
//        console.log(stack);
//      }

// }

// const stack = new Stack()
// stack.push(1)
// stack.print() 
// console.log(stack.isEmpty()); 


let t = -1 , max =10 , arr = new Array(max).fill(0)

function push(x){
    if(t>max){
        console.log("Stack Overflow");
    }else{
        t++
        arr[t] = x
        return true
    }
}

function pop(x){
    if(t<0){
        console.log("Underflow");
    }else{
        let remove = arr[t]
        t--
        return remove
    }
}