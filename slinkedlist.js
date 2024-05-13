// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }

//     isEmpty(){
//         return this.size===0
//     }

//     getSize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node;
//         }else{
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('EMPTY');
//         }else{
//             let curr = this.head;
//             let listValues = ''
//             while(curr){
//                 listValues += `${curr.value} `
//                 curr = curr.next;
//             }
//             console.log(listValues);
//         }
//     }
// }

// const list = new LinkedList();

// console.log(list.isEmpty())
// console.log(list.getSize())
// list.print()
// list.prepend(5);
// list.print()
// list.prepend(10);
// list.prepend(15)
// list.print()
// console.log(list.getSize())

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    append(data){
        const newnode = new Node(data);
        newnode.next = this.head
        this.head = newnode
    }
    //insert at the beginning
    addValue(data){
        const node = new Node(data);
        if(this.head===null){ 
            this.head = node;
        }else{
            node.next = this.head
            this.head = node
        }
    }
    //insert at end
    addValueEnd(data){
        const node = new Node(data);
        if(this.head){
        let curr = this.head
        while(curr.next){
            curr = curr.next
        }
        curr.next = node
        }else{
            this.head = node
        }
    }
    //insert middle
    addValueMiddle(data){
        const node = new Node(data)
        if(this.head){
          let slow = this.head
          let fast = this.head
          let prev = null
          while(fast && fast.next){
            prev = slow
            slow = slow.next
            fast = fast.next.next
          }
         
          node.next = slow
          prev.next = node
        }

    }

    //console the whole list
    print(){
        let curr = this.head;
        let lists = '';
        while(curr){
            lists += `${curr.data} `
            curr = curr.next
        }
        console.log(lists);
    }

    printreverse(){
        let curr = this.head
        let lists = "";
        while(curr){
            lists += `${curr.data} `
            curr = curr.next
        }
        let reversed = lists.split(" ").reverse().join(" ")
        console.log(reversed)
    }

    removeDuplicates(){
        let curr = this.head
        while(curr && curr.next){
            if(curr.data===curr.next.data){
                curr.next = curr.next.next
            }else{
                curr = curr.next
            }
        }
    }

    deleteStart(){
        if(this.head){
            // this.head = null
            this.head = this.head.next

        }
    }

    deleteEnd(){
        if(this.head){
            let curr = this.head;
            let back = null;
            while(curr.next){
                back = curr
                curr = curr.next
            }
            back.next = null
        }
    }

    deleteMiddle(){
        if(this.head){
            let prev = null
            let slow = this.head
            let fast = this.head
            while(fast && fast.next){
                prev = slow
                slow = slow.next
                fast = fast.next.next
            }
                prev.next = slow.next
        }
    }

    deleteGivenPos(pos){
        if(this.head){
            if(pos<0){
                console.log("Give valid position");
            }else if(pos==0){
                 this.head = null
            }else{
                let prev = null;
                let curr = this.head
                let index = 0
                while(curr.next && index<pos){
                    prev = curr;
                    curr = curr.next
                    index++
                }
                prev.next = curr.next
            }
        }
    }

    findLength(){
        if(this.head){
            let curr = this.head
            let count = 1;
            while(curr.next){
                curr = curr.next
                count++
            }
            console.log("Count is "+count )

        }else{
            console.log("0");
        }
    }
   //swapwithdata
    swapNode(n1,n2){
        if(this.head){
            let curr1 = this.head
            let prev1 = null

            while(curr1 && curr1.data != n1){
                prev1 = curr1
                curr1 = curr1.next
            }

            

            let curr2 = this.head
            let prev2 = null

            while(curr2 && curr2.data != n2){
                prev2 = curr2
                curr2 = curr2.next
            }
           

            prev1.next = curr2
            prev2.next = curr1

            let temp = curr1.next
            curr1.next = curr2.next
            curr2.next = temp

        }
    }   

}
function arraytoList(arr){
    let listof = new LinkedList()
    for(let i=0;i<arr.length;i++){
        listof.addValueEnd(arr[i])
    }
    return listof   
}

let arr = [1,2,3,4,5]
const linked = arraytoList(arr)
linked.print()

let list = new LinkedList();
// list.addValue(5)
// list.addValue(2)
// list.addValue(10)
// list.addValue(7)
// list.addValue(7)
// list.addValue(4)
// list.addValueEnd(3)
// list.addValueMiddle(1)
// list.print()
// list.removeDuplicates()
list.append(9)
list.print()
// list.printreverse()
// list.findLength()
// list.swapNode(7,5)
// list.print()

// list.deleteStart()
// list.deleteEnd()
// list.deleteMiddle()
// list.deleteGivenPos(2)
// list.print()