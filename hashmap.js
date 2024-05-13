// let m = new Map()
// m.set(10,100)
// m.set("name","surya")
// m.set(34,true)
// m.delete("")
// console.log(m);

// for(t of m){
//     console.log(t[1]) // all data
    //    console.log(t[0]) // keys
    //    console.log(t[1]) //value
// }

// for(t of m.keys()){
//     console.log(t);
// } // keys only

// for(t of m.values()){
//     console.log(t);
// } // values only


// let i = 0
// for(t of m){
//     t.set(t[0],i)
//     i++
// }
// console.log(m);


// class HashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let total = 0
//         for(let i=0;i<key.length;i++){
//           total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }
// }

// class HashTable {
//     constructor(size = 11) { // Choosing a prime number size (11 in this case)
//         this.size = size;
//         this.buckets = new Array(size).fill(null).map(() => []);
//     }

//     // Basic hash function using modulo operator
//     hash(key) {
//         return key % this.size;
//     }

//     // Method to insert a key-value pair into the hash table
//     set(key, value) {
//         const index = this.hash(key);
//         this.buckets[index].push({ key, value });
//     }

//     // Method to retrieve a value from the hash table given a key
//     get(key) {
//         const index = this.hash(key);
//         const bucket = this.buckets[index];
//         for (let pair of bucket) {
//             if (pair.key === key) {
//                 return pair.value;
//             }
//         }
//         return undefined;
//     }
// }

// // Example usage
// let hashtable = new HashTable();

// hashtable.set(1, "Apple");
// hashtable.set(2, "Banana");
// hashtable.set(3, "Orange");

// console.log(hashtable.get(1));  
// console.log(hashtable.get(2));  
// console.log(hashtable.get(3)); 





//////////////////////////////////////////////////////////////////////////////////
//Seperate Chaining//////////////////////////////////////////////////////////////

// class HashTable{
//     constructor(size = 10) {
//         this.size = size
//         this.buckets = new Array(size).fill(null).map(()=>[])
//     }

//     _hash(key){
//         return key % this.size
//     }

//     set(key,value){
//         const index = this._hash(key)
//         const bucket = this.buckets[index]
//         for(let i=0;i<bucket.length;i++){
//             if(bucket[i][0]===key){
//                 bucket[i][1]===value
//             }
//         }
//         bucket.push([key,value])
//     }

//     get(key){
//         const index = this._hash(key)
//         const bucket = this.buckets[index]
//         for(let i=0;i<bucket.length;i++){
//             if(bucket[i][0]===key){
//                 return bucket[i][1]
//             }
//         }
//         return undefined
//     }

//     print(){
//         console.log(this.buckets);
//     }
// }

// const hashtable = new HashTable()
// hashtable.set(1,"Nujoom")
// hashtable.set(11,"Hari")
// hashtable.set(22,"Suryadarsh")
// hashtable.print()
// console.log(hashtable.get(22))
// console.log(hashtable.get(11))


//linear probing//////////////////////////////////////////////////////////////////////////////////////////////////

// class HashTable{
//     constructor(size = 10){
//         this.size = size
//         this.key = new Array(size).fill(null)
//         this.value = new Array(size).fill(null)
//     }

//     _hash(key){
//         return key % this.size
//     }

//     set(key,value){
//         let index = this._hash(key)
//         if(this.key[index]!=null){
//             index = (index+1) % this.size
//         }
//         this.key[index] = key
//         this.value[index] = value
//     }

//     get(key){
//         const index = this._hash(key)
//         let OriginalIndex = index
//         while(this.key[index]!=index){
//             index = (index+1)%this.size;
//             if(index === OriginalIndex || this.key[index]===null){
//                 return undefined
//             }
//         }
//         return this.value[index]
//     }
// }

// const hasht = new HashTable()
// hasht.set(1,'HEllo')
// hasht.set(2,"Babu")
// console.log(hasht.get(1))


class HashTable{
    constructor(size=31){
        this.size = size
        this.buckets = new Array(size).fill(null).map(()=>[])
    }

    _hashkey(key){
        return key % this.size
    }

    set(key,value){
        const index = this._hashkey(key)
        const bucket = this.buckets[index]
        for(let i=0;i<bucket.length;i++){
            if(bucket[i][0]===key){
                bucket[i][1]===value
            }
        }
        bucket.push([key,value])
    }

    get(key){
        const index = this._hashkey(key)
        const bucket = this.buckets[index]
        for(let i=0;i<bucket.length;i++){
            if(bucket[i][0]===key){
                return bucket[i][1]
            }
        }
        return undefined
    }


    
}