//building heap
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    buildHeap(arr) {
        this.heap = arr;
        for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
            this.heapify(i);
        }
    }

    heapify(index) {
        let largest = index;
        let left = 2 * index + 1;
        let right = 2 * index + 2;

        if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
            largest = left;
        }

        if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
            largest = right;
        }

        if (largest !== index) {
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            this.heapify(largest);
        }
    }
    insert(value) {
        this.heap.push(value);
        let index = this.heap.length - 1;
        let parent = Math.floor((index - 1) / 2);
        while (index > 0 && this.heap[parent] < this.heap[index]) {
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }

    extractMax() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapify(0);

        return max;
    }

    printHeap() {
        console.log(this.heap);
    }
}

// Example usage
let arr = [3, 2, 1, 5, 6, 4];
let maxHeap = new MaxHeap();
maxHeap.buildHeap(arr);
maxHeap.insert(10);
console.log(maxHeap.extractMax()); 
maxHeap.printHeap();

