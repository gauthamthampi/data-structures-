//Bubble Sort/////////////////////////////////////////////////////////////////////////////////

//bubble sort +1
// let arr = [4,3,0,2,1]
// function bubbleSortAsc(arr){
//     let n = arr.length , temp, swapped;
// do{
//     swapped = false;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>arr[i+1]){
//         temp = arr[i]
//         arr[i] = arr[i+1]
//         arr[i+1] = temp
//         swapped = true
//     }
// }

// }while(swapped)

// return arr
// }

// console.log(bubbleSortAsc(arr))


//bubble sort -1
// let arr = [0,3,2,1,4,5]
// function bubbleSortDesc(arr){
//  let n = arr.length, temp, swapped;
//  do{
//     swapped = false
//     for(let i=0;i<n;i++){
//         if(arr[i]<arr[i+1]){
//             temp = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = temp
//             swapped = true
//         }
//     }
//  }while(swapped)
//  return arr
// }
// console.log(bubbleSortDesc(arr));

//alternate
// function alternateSort(arr) {
//     let n = arr.length;
//     let ascending = true;

//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (ascending) {
//                 if (arr[j] > arr[j + 1]) {
//                     // Swap if elements are in the wrong order
//                     [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//                 }
//             } else {
//                 if (arr[j] < arr[j + 1]) {
//                     // Swap if elements are in the wrong order
//                     [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//                 }
//             }
//             ascending = !ascending; // Toggle the sorting order
//         }
//     }
//     return arr;
// }

// // Example usage
// let arr = [5, 3, 8, 4, 2, 1, 7, 6];
// console.log("Alternating Sort:", alternateSort(arr));

//Insertion Sort/////////////////////////////////////////////////////////////////////////////////

// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let value = arr[i]
//         let j = i - 1;
//         while(j>=0 && arr[j]>value){
//             arr[j+1] = arr[j]
//             j = j-1
//         }
//         arr[j+1] = value
//     }
//     return arr;
// }

// let arr = [5,4,3,2,1,0]
// console.log(insertionSort(arr));


// let arr = [1,2,3,4,5,6]
// function insertionSortDesc(arr){
//     for(let i=1;i<arr.length;i++){
//         let value = arr[i]
//         let j = i-1
//         while(j>=0 && arr[j]<value){
//             arr[j+1] = arr[j]
//             j = j - 1
//         }
//         arr[j+1] = value
//     }
//     return arr
// }
// console.log(insertionSortDesc(arr));

//alternate
// function alternateSort(arr) {
//     let n = arr.length;
//     let ascending = true;

//     for (let i = 1; i < n; i++) {
//         let key = arr[i];
//         let j = i - 1;

//         while (j >= 0 && ((ascending && arr[j] > key) || (!ascending && arr[j] < key))) {
//             arr[j + 1] = arr[j];
//             j = j - 1;
//             ascending = !ascending;
//         }
//         arr[j + 1] = key;
//     }
//     return arr;
// }

// // Example usage
// let arr = [5, 3, 8, 4, 2, 1, 7, 6];
// console.log("Alternating Sort:", alternateSort(arr));



//selection sort//////////////////////////////////////////////////////////////////////

// let arr = [5,3,1,9,4,8]
// function selectionSort(arr){
//     let temp;
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr;
// }
// console.log(selectionSort(arr))+"HI";

// function selectionSortDes(arr){
//     let temp;
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]<arr[j]){
//                 temp = arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//             }
//         }
//     }
//     return arr;
// }
// console.log(selectionSortDes(arr));

// function alternateSort(arr) {
//     let n = arr.length;
//     let start = 0;
//     let end = n - 1;

//     for (let i = 0; i < n / 2; i++) {
//         let minIndex = start;
//         let maxIndex = end;

//         // Find the minimum element in the unsorted portion of the array
//         for (let j = start + 1; j <= end; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }

//         // Find the maximum element in the unsorted portion of the array
//         for (let j = start + 1; j <= end; j++) {
//             if (arr[j] > arr[maxIndex]) {
//                 maxIndex = j;
//             }
//         }

//         // Swap the minimum element with the first unsorted element
//         [arr[minIndex], arr[start]] = [arr[start], arr[minIndex]];

//         // Swap the maximum element with the last unsorted element
//         [arr[maxIndex], arr[end]] = [arr[end], arr[maxIndex]];

//         // Move the pointers inward for the next iteration
//         start++;
//         end--;
//     }

//     return arr;
// }

// // Example usage
// let arr = [5, 3, 8, 4, 2, 1, 7, 6];
// console.log("Alternating Sort:", alternateSort(arr));


// quick sort ///////////////////////////////////////////////////////////////////////

// let arr = [7,5,4,3,2,1]
// function quickSortAsc(arr){
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
//     return [...quickSortAsc(left),pivot,...quickSortAsc(right)]
// }

// console.log(quickSortAsc(arr));

// function quickSortDsc(arr){
//     if(arr.length<2){
//         return arr;
//     }
//     let pivot = arr[arr.length-1]
//     let left  = []
//     let right = []
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             right.push(arr[i])
//         }else{
//             left.push(arr[i])
//         }
//     }
//     return [...quickSortDsc(left),pivot,...quickSortDsc(right)]
// }

// console.log(quickSortDsc(arr));

//alternate
// function alternateQuickSort(arr, start = 0, end = arr.length - 1, ascending = true) {
//     if (start >= end) return;

//     let pivotIndex = partition(arr, start, end, ascending);

//     alternateQuickSort(arr, start, pivotIndex - 1, !ascending);
//     alternateQuickSort(arr, pivotIndex + 1, end, !ascending);

//     return arr;
// }

// function partition(arr, start, end, ascending) {
//     let pivotIndex = start;
//     let pivot = arr[end];
//     for (let i = start; i < end; i++) {
//         if ((ascending && arr[i] < pivot) || (!ascending && arr[i] > pivot)) {
//             [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
//             pivotIndex++;
//         }
//     }
//     [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
//     return pivotIndex;
// }

// // Example usage
// let arr = [5, 3, 8, 4, 2, 1, 7, 6];
// console.log("Alternating Quick Sort:", alternateQuickSort(arr));


//merge sort //////////////////////////////////////////////////////////////////////////

// let arr = [5,4,3,2,1]

// function mergeSort(arr){
//     if(arr.length<2){
//         return arr;
//     }

//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right){
//     let sorted = []
//     while(left.length && right.length){
//         if(left[0]<=right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }

// console.log(mergeSort(arr));


//desc

// function mergeSortDes(arr){
//     if(arr.length<2){
//         return arr;
//     }

//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
//     return mergeDes(mergeSortDes(left),mergeSortDes(right))
// }

// function mergeDes(left,right){
//     let sorted = []
//     while(left.length && right.length){
//         if(left[0]>=right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }

// console.log(mergeSortDes(arr));

// function mergeSort(arr, comparator) {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     const mid = Math.floor(arr.length / 2);
//     const left = mergeSort(arr.slice(0, mid), comparator);
//     const right = mergeSort(arr.slice(mid), comparator);

//     return merge(left, right, comparator);
// }

// function merge(left, right, comparator) {
//     let result = [];
//     let leftIndex = 0;
//     let rightIndex = 0;

//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (comparator(left[leftIndex], right[rightIndex])) {
//             result.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             result.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }

//     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }

// Example usage
// let arr = [-3, 2, -8, 4, -2, 1, -7, 6];
// console.log("Original Array:", arr);

// // Custom comparator function: Sort negative numbers before positive numbers
// function customComparator(a, b) {
//     if (a < 0 && b >= 0) {
//         return true; // Sort negative numbers before positive numbers
//     } else {
//         return false;
//     }
// }

// console.log("Sorted Array:", mergeSort(arr, customComparator));

//heapsort 

//same as heap(class and functions)

function heapsort(arr){
 const maxHeap = new MaxHeap();

 for(let i=0;i<arr.length;i++){
    maxHeap.insert(arr[i]); //insert is function of class MaxHeap{insert and heapifyUp()}
 }

 let sortedArr = [];
 while(!maxHeap.isEmpty()){
    sortedArr.unshift(maxHeap.removeMax())
 }
 return sortedArr;

}