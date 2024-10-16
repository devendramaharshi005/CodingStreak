class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    parent(i) {
      return Math.floor((i - 1) / 2);
    }
  
    leftChild(i) {
      return 2 * i + 1;
    }
  
    rightChild(i) {
      return 2 * i + 2;
    }
  
    insert(data) {
      this.heap.push(data);
      this.bubbleUp(this.heap.length - 1);
    }
  
    bubbleUp(index) {
      while (index > 0) {
        const parentIndex = this.parent(index);
        if (this.heap[parentIndex] > this.heap[index]) {
          [this.heap[parentIndex], this.heap[index]] = [
            this.heap[index],
            this.heap[parentIndex],
          ];
          index = parentIndex;
        } else {
          break;
        }
      }
    }
  
    extractMin() {
      if (this.heap.length === 0) {
        throw new Error("The heap is empty");
      }
      const min = this.heap[0];
      const lastElement = this.heap.pop();
  
      if (this.heap.length > 0) {
        this.heap[0] = lastElement;
        this.bubbleDown(0);
      }
      return min;
    }
  
    size() {
      return this.heap.length;
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  
    bubbleDown(index) {
      let currentIndex = index;
      let smallestIndex = index;
      
      do {
        smallestIndex = currentIndex;
        const leftChildIndex = this.leftChild(currentIndex);
        const rightChildIndex = this.rightChild(currentIndex);
  
        if (
          leftChildIndex < this.heap.length &&
          this.heap[leftChildIndex] < this.heap[smallestIndex]
        ) {
          smallestIndex = leftChildIndex;
        }
       
        if (
          rightChildIndex < this.heap.length &&
          this.heap[rightChildIndex] < this.heap[smallestIndex]
        ) {
          smallestIndex = rightChildIndex;
        }
  
        if (smallestIndex !== currentIndex) {
          [this.heap[smallestIndex], this.heap[currentIndex]] = [
            this.heap[currentIndex],
            this.heap[smallestIndex],
          ];
          currentIndex = smallestIndex;
        }
      } while (smallestIndex !== currentIndex);
    }
  }
  
  function runTests() {
    const heap = new MinHeap();
  
    // Test 1: Inserting values
    heap.insert(5);
    heap.insert(3);
    heap.insert(8);
    heap.insert(1);
    heap.insert(4);
  
    console.assert(heap.size() === 5, "Test 1 Failed: Size should be 5");
  
    // Test 2: Extracting minimum value
    console.assert(heap.extractMin() === 1, "Test 2 Failed: Extracted min should be 1");
    console.assert(heap.extractMin() === 3, "Test 2 Failed: Extracted min should be 3");
  
    // Test 3: Current size after extracting
    console.assert(heap.size() === 3, "Test 3 Failed: Size should be 3");
  
    // Test 4: Extracting all elements
    console.assert(heap.extractMin() === 4, "Test 4 Failed: Extracted min should be 4");
    console.assert(heap.extractMin() === 5, "Test 4 Failed: Extracted min should be 5");
    console.assert(heap.extractMin() === 8, "Test 4 Failed: Extracted min should be 8");
    console.assert(heap.isEmpty(), "Test 4 Failed: Heap should be empty now");
  
    // Test 5: Extracting from an empty heap
    try {
      heap.extractMin();
      console.assert(false, "Test 5 Failed: Should have thrown an error");
    } catch (e) {
      console.assert(e.message === "The heap is empty", "Test 5 Failed: Incorrect error message");
    }
  
    // Test 6: Inserting negative numbers
    heap.insert(-1);
    heap.insert(-5);
    heap.insert(0);
    console.assert(heap.extractMin() === -5, "Test 6 Failed: Extracted min should be -5");
  
    console.log("All tests passed!");
  }
  
  runTests();