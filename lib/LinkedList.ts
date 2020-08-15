export class ListNode<T> {
  value: T;
  next: ListNode<T> | null;
  prev: ListNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class LinkedList<T> {
  length: number;
  head: ListNode<T> | null;
  tail: ListNode<T> | null;
  constructor(value?: T, ...rest: Array<T>) {
    this.length = 0;
    this.head = null;
    this.tail = null;
    if (value) {
      this.push(value, ...rest);
    }
  }

	/**
     * append the rest parameter of method push
     * @param value 
     */
  private pushArray(value: Array<T>) {
    value.forEach((n) => {
      this.push(n);
    });
  }

	/**
     * clear all elements
     */
  clear() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

	/**
     * @param value 
     * @param rest - Optional
     * @example
     *  list.push(1, 2, 4, 6)
     */
  push(value: T, ...rest: Array<T>) {
    const node = new ListNode<T>(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    }

    this.tail.next = node;
    this.tail = node;

    this.length++;

    // handle multiple arguments
    // e.g list.push(2, 3)
    if (rest.length > 0) {
      this.pushArray(rest);
    }
  }
}
