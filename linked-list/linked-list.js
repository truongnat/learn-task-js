//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node {
  constructor(val) {
    this._val = val;
    this._prev = null;
    this._next = null;
  }
}

export class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
  }
  push(val) {
    const newNode = new Node(val);
    if (this._tail !== null) {
      this._tail._next = newNode;
    }
    newNode._prev = this._tail;
    this._tail = newNode;
    if (this._head === null) {
      this._head = newNode;
    }
  }

  pop() {
    const poppedNodeVal = this._tail._val;
    this._tail = this._tail._prev;

    if (this._tail === null) {
      this._head = null;
    } else {
      this._tail._next = null;
    }

    return poppedNodeVal;
  }

  shift() {
    const poppedNodeVal = this._head._val;
    this._head = this._head._next;

    if (this._head === null) {
      this._tail = null;
    } else {
      this._head._prev = null;
    }

    return poppedNodeVal;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this._head !== null) {
      this._head._prev = newNode;
    }
    newNode._next = this._head;

    this._head = newNode;

    if (this._tail === null) {
      this._tail = newNode;
    }
  }

  delete(val) {
    let node = this._head;

    while (node && node._val !== val) {
      node = node._next;
    }

    if (node === null) return;

    if (node._prev === null) {
      this._head = node._next;
    } else {
      node._prev._next = node._next;
    }

    if (node._next === null) {
      this._tail = node._prev;
    } else {
      node._next._prev = node._prev;
    }

    node = null;
  }

  count() {
    let node = this._head;
    let count = 1;

    if (node === null) {
      return 0;
    }

    while (node && node._next !== null) {
      count++;
      node = node._next;
    }

    return count;
  }
}
