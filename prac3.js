// let str = "hello"
// let newstr = str[0].toUpperCase() + str.slice(1,str.length)
// console.log(newstr);

// let arr = [1,2,3,4,5,6,7,8,9];
// let target = 8;

// function binarySearch(arr,target){
    
//     let left = 0;
//     let right = arr.length-1;

//     while(left<=right){

//         let mid = Math.floor((left+right)/2)

//         if(arr[mid]===target){
//             return mid;
//         }else if(target<mid){
//             right = mid-1
//         }else{
//             left = mid + 1
//         }
  
//     }
    
// }

// console.log(binarySearch(arr,target))

// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//     }

//     append(data){
//         const node = new Node(data)
//         if(!this.head){
//             this.head = node;
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//     }

//     removeMiddle(){
//         if(this.head){
//             let prev = null;
//             let slow = this.head
//             let fast = this.head
//             while(fast && fast.next){
//                 prev = slow
//                 slow = slow.next
//                 fast = slow.next.next
//             }

//             prev.next = slow.next

//         }
//     }

//     print(){
//         if(this.head){
//             let list = ''
//             let curr = this.head;
//             while(curr){
//                 list += `${curr.data} `
//                 curr = curr.next
//             }
//             console.log(list)
//         }
//     }
// }

// let linkedlist = new LinkedList()
// linkedlist.append(3)
// linkedlist.append(4)
// linkedlist.append(5)
// linkedlist.removeMiddle()
// linkedlist.print()

// function bubbleSortAsc(arr){
//     let temp, swapped;
//     do{
//         swapped = false
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]>arr[i+1]){
//                 temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
//     }while(swapped)

//     return arr;
// }

let arr = [7,6,5,4,4,3]
// console.log(bubbleSortAsc(arr));

// function InsertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let value = arr[i]
//         let j = i-1
//         while( j>=0 && value < arr[j]){
//             arr[j+1] = arr[j]
//             j = j-1
//         }
//         arr[j+1] = value
//     }
//     return arr
// }

// console.log(InsertionSort(arr));

// function selectionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// }

// console.log(selectionSort(arr));

// function quickSort(arr){
//     if(arr.length<2){
//         return arr;
//     }
//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]>pivot){
//             right.push(arr[i])
//         }else{
//             left.push(arr[i])
//         }
//     }

//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// console.log(quickSort(arr));

function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    let sorted = []
    while(left.length && right.length){
        if(left[0]>right[0]){
            sorted.push(right.shift())
        }else{
            sorted.push(left.shift())
        }
    }
    return [...sorted,...left,...right]
}

console.log(mergeSort(arr));