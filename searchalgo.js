//binary sorted
// function binarySearch(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
//         let midValue = arr[mid];

//         if (midValue === target) {
//             return mid; // Found the target
//         } else if (midValue < target) {
//             low = mid + 1; // Target is in the right half
//         } else {
//             high = mid - 1; // Target is in the left half
//         }
//     }

//     return -1; // Target not found
// }

// // Example usage:
// const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const targetValue = 5;
// // const result = binarySearch(sortedArray, targetValue);
// // console.log(`Index of ${targetValue}: ${result}`);

//binary recursion
function binarySearchRecursive(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) {
        return -1; // Target not found
    }

    const mid = Math.floor((low + high) / 2);
    const midValue = arr[mid];

    if (midValue === target) {
        return mid; 
    } else if (midValue < target) {
        return binarySearchRecursive(arr, target, mid + 1, high);
    } else {
        return binarySearchRecursive(arr, target, low, mid - 1); 
    }
}

//binary search on sorted array with recursion
function binarySearchInfiniteArray(arr, target) {
  let low = 0;
  let high = 1;

  while (arr[high] < target) {
      low = high;
      high *= 2;
  }

 
  while (low <= high) {
      const mid = low + Math.floor((high - low) / 2);
      if (arr[mid] === target) {
          return mid;
      } else if (arr[mid] < target) {
          low = mid + 1;
      } else {
          high = mid - 1;
      }
  }

  return -1; 
}


const arr = [1, 3, 5, 7, 9, 11, /* infinite array elements */];
const target = 7;
const index = binarySearchInfiniteArray(arr, target);
console.log(index);


function removeVowels(str) {
    // Use regular expression to replace all vowels with an empty string
    return str.replace(/[aeiouAEIOU]/g, '');
}

// Example usage:
const inputString = "Hello World!";
const result = removeVowels(inputString);
console.log(result); 
str.replace(/[awijfi]/g,'')
// // Example usage:
// const resultRecursive = binarySearchRecursive(sortedArray, targetValue);
// console.log(`Index of ${targetValue} (Recursive): ${resultRecursive}`);

//binary object
// Binary search based on a specific property of objects in an array
// function binarySearchObjects(arr, target, key) {
//     let low = 0;
//     let high = arr.length - 1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
//         let midValue = arr[mid][key];

//         if (midValue === target) {
//             return mid; // Found the target
//         } else if (midValue < target) {
//             low = mid + 1; // Target is in the right half
//         } else {
//             high = mid - 1; // Target is in the left half
//         }
//     }

//     return -1; // Target not found
// }

// // Example usage:
// const objectsArray = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" },
//     { id: 3, name: "Charlie" },
//     { id: 4, name: "David" }
// ];

// const targetId = 3;
// const resultObjects = binarySearchObjects(objectsArray, targetId, 'id');
// console.log(`Index of object with id ${targetId}: ${resultObjects}`);

//basic linear search
// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === target) {
//         return i; // Return the index if the target is found
//       }
//     }
//     return -1; // Return -1 if the target is not found
//   }
  
//   const array1 = [1, 2, 3, 4, 5];
//   const target1 = 3;
//   console.log(linearSearch(array1, target1)); 

//linear search with objects
// function linearSearchObjects(arr, property, value) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i][property] === value) {
//         return i; // Return the index if the property value is found
//       }
//     }
//     return -1; // Return -1 if the property value is not found
//   }
  
//   const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 22 }
//   ];
  
//   const targetName = 'Bob';
//   console.log(linearSearchObjects(people, 'name', targetName));

//linear with string
function linearSearchString(str, target) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === target) {
        return i; // Return the index if the target character is found
      }
    }
    return -1; // Return -1 if the target character is not found
  }
  
  const text = 'Hello, World!';
  const targetChar = 'W';
  console.log(linearSearchString(text, targetChar));
  
  
  