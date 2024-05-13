//Doubly Linked List
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
    }

    append(data){
        const node = new Node(data)
            if(!this.head){
                this.head = node;
                return;
            }
              this.head.prev = node
              node.next = this.head
              this.head = node
             
            
        
    }

    print(){
        if(!this.head){
            console.log("Empty LL")
        }else{
            let lists = "";
            let curr = this.head;
            while(curr){
                lists += `${curr.data} `
                curr = curr.next
            }
            console.log(lists);

        }
    }
}

const list = new DoublyLinkedList();
list.append(1)
list.append(2)
list.append(3)
list.print()