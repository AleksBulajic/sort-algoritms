function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];

    let j = i - 1;

    while (arr[j] > current) {
      arr[j + 1] = arr[j];

      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}
console.log(insertionSort([34, 69, 6, 7, 10, 89, 67]));

// to sort an array of numbers in insertion order

// selection sort----------------------------------------------------------------

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
  }
  return arr;
}
console.log(selectionSort([34, 69, 6, 7, 10, 8]));

//bubble sort----------------------------------------------------------------

function bblSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    // Last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        // If the condition is true
        // then swap them
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  // Print the sorted array
  return arr;
}

console.log(bblSort([34, 69, 6, 7, 10, 8]));

// function sum(num) {
//     if (num === 0){
//     return 0;
//     }

//     return num + sum (sum + 1);

// }
// console.log(sum())

//Merge sort--------------------------------------------------------------------------------------------------------------------

function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([2, 7, 8, 24, 56, 74, 68, 98]));

// Quick Sort--------------------------------------------------------------------------------------------------------------------------------

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log(quickSort([86, 02, 4, 7, 1, 5, 8, 34]));

// Pivot Sort--------------------------------------------------------------------------------
function pivot(arr, start = 0, end) {
  let pivot = arr[start];
  let swapindex = start;

  for (let i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      swapindex++;
      [arr[i], arr[swapindex]] = [arr[swapindex], arr[i]];
    }
  }
  [arr[start], arr[swapindex]] = [arr[swapindex], arr[start]];
  return swapindex;
}

function quickSort(arr, left = 0, right = arr.lenght - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);

    quickSort(arr, right, pivotIndex - 1);
  }
}

// Linked List--------------------------------------------------------------------------------

// ------------------------------------------------
// ##### Singly Linked List Data Structure
// ------------------------------------------------
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // Insert at index
  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }

    return null;
  }

  // Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  // Print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// ------------------------------------------------
// ##### Using Linked List
// ------------------------------------------------
const ll = new LinkedList();

// Insert a string
ll.insertFirst("Hello, world!");

// Insert a number
ll.insertLast(123);

// Insert an object
ll.insertLast({ name: "Alice", age: 25 });

// Insert a boolean
ll.insertLast(true);

// Insert an array
ll.insertLast([1, 2, 3]);

// Print list data
ll.printListData();

// Output:
// Hello, world!
// 123
// { name: 'Alice', age: 25 }
// true
// [1, 2, 3]

// ------------------------------------------------
// ##### Music Playlist Linked List
// ------------------------------------------------
class SongNode {
  constructor(song, next = null) {
    this.song = song;
    this.next = next;
  }
}

class Playlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addSong(song) {
    let node = new SongNode(song);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  playNextSong(index = 0) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(`Now playing: ${current.song}`);
        return current.song;
      }
      count++;
      current = current.next;
    }

    return null;
  }

  removeSong(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  printPlaylist() {
    let current = this.head;

    while (current) {
      console.log(current.song);
      current = current.next;
    }
  }
}

// Create a new playlist and add songs
const playlist = new Playlist();
playlist.addSong("Song 1");
playlist.addSong("Song 2");
playlist.addSong("Song 3");

// Play the next song in the playlist (starting from the beginning)
playlist.playNextSong();

// Print all songs in the playlist
playlist.printPlaylist();

// Remove a song from the playlist
playlist.removeSong(1);

// Print all songs in the playlist again
playlist.printPlaylist();

// ------------------------------------------------
// ##### Blockchain Linked List (needs fixing)
// ------------------------------------------------

class Block {
  constructor(transaction, prevBlockHash = "", hash = "") {
    this.transaction = transaction;
    this.prevBlockHash = prevBlockHash;
    this.hash = hash;
  }
}

class BlockChain {
  constructor() {
    this.chain = new LinkedList();
    this.chain.insertFirst(new Block("Genesis", null, "HASH_1")); // Genesis Block
  }

  // Add block to the chain
  addBlock(transaction, hash) {
    const newBlock = new Block(transaction, this.chain.head.data.hash, hash);
    this.chain.insertFirst(newBlock);
  }

  // Verify the chain
  verifyChain() {
    let current = this.chain.head;
    while (current) {
      if (
        current.next &&
        current.data.prevBlockHash !== current.next.data.hash
      ) {
        console.log("Chain is invalid!");
        return false;
      }
      current = current.next;
    }
    console.log("Chain is valid.");
    return true;
  }

  // Print chain data
  printChainData() {
    let current = this.chain.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Create a blockchain and add blocks
const myChain = new BlockChain();
myChain.addBlock("Transaction 1", "HASH_2");
myChain.addBlock("Transaction 2", "HASH_3");
myChain.addBlock("Transaction 3", "HASH_4");

// Print all blocks in the chain
myChain.printChainData();

// Verify the chain
myChain.verifyChain();
