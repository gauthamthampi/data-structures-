function heapify(arr, n, index) {
    let largest = index;
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== index) {
        [arr[index], arr[largest]] = [arr[largest], arr[index]];
        heapify(arr, n, largest);
    }
}

function buildMaxHeap(arr) {
    let n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
}

function heapsort(arr) {
    buildMaxHeap(arr);

    for (let i = arr.length - 1; i >= 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

    return arr;
}

let arr = [12, 11, 13, 5, 6, 7];
console.log("Original array:", arr);

let sortedArr = heapsort(arr);
console.log("Sorted array:", sortedArr);
