class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    append(data){
        const node = new Node(data);
        if(this.head===null){ 
            this.head = node;
        }else{
            node.next = this.head
            this.head = node
        }
    }

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

    }
    function arraytoList(arr){
        let listof = new LinkedList();
        for(let i=0;i<arr.length;i++){
            listof.append(arr[i])
        }
        return listof   
    }
    
    let arr = [1,2,3,4,5]
    const linked = arraytoList(arr)
    linked.print()
    linked.printreverse()
// let linkedlist = new LinkedList();
// linkedlist.append(1)
// linkedlist.append(2)
// linkedlist.append(3)
// linkedlist.print()

