class Node {
  value: any;
  next: Node | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  head: Node | null;

  constructor() {
    this.head = null;
  }

  insert(value: any) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  length() {
    let current = this.head;
    let length = 0;
    while (current) {
      length++;
      current = current.next;
    }
    return length;
  }

  toArray() {
    const array: Array<any> = [];
    let current = this.head;
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }

  insertAt(index: number, value: any) {
    const node = new Node(value);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      if (!current) {
        throw new Error("Index out of bounds");
      }
      current = current.next;
    }
    if (!current) {
      throw new Error("Index out of bounds");
    }
    node.next = current.next;
    current.next = node;
  }

  get(index: number) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      if (!current) {
        throw new Error("Index out of bounds");
      }
      current = current.next;
    }
    if (!current) {
      throw new Error("Index out of bounds");
    }
    return current.value;
  }

  delete(index: number) {
    if (index === 0) {
      this.head = this.head?.next || null;
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      if (!current) {
        throw new Error("Index out of bounds");
      }
      current = current.next;
    }
    if (!current || !current.next) {
      throw new Error("Index out of bounds");
    }
    current.next = current.next.next;
  }

  find(value: any) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }
}
