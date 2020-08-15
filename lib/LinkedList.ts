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
   * creates a new, shallow-copied LinkedList instance from an array-like or iterable object.
   * @param value - Iterable object
   * @returns LinkedList
   */
	static from(value: string | object | Array<unknown>) {
		const valueType = typeof value;

		if (!value || valueType === "number") {
			throw new TypeError(`${value} is not iterable`);
		}

		const list = new LinkedList<unknown>();
		const valueArray = [].slice.call(value);
		list.pushArray(valueArray);
		return list;
	}

	/**
   * Determine wheter the given value is an LinkedList
   * @param value - any
   * @returns boolean
   */
	static is(value: unknown) {
		if (typeof value !== "object") {
			return false;
		}
		const val = (value as LinkedList<unknown>);
		// check if it has signature property
		if (!val.hasOwnProperty("length")) {
			return false;
		}
		if (!val.hasOwnProperty("head")) {
			return false;
		}
		if (!val.hasOwnProperty("tail")) {
			return false;
		}

		// check if it's node is valid
		if (val.length > 0) {
			const head = val.head;
			const tail = val.tail;

			// check if it's has signature property of Node
			if (!head.hasOwnProperty("next") || !tail.hasOwnProperty("next")) {
				return false;
			}
			if (!head.hasOwnProperty("prev") || !tail.hasOwnProperty("prev")) {
				return false;
			}
			if (!head.hasOwnProperty("value") || !tail.hasOwnProperty("value")) {
				return false;
			}
		}

		return true;
	}

	/**
     * append the rest parameter of method push
     * @param value 
     */
	private pushArray(value: Array<T>) {
		value.forEach((n) => {
			this.push(n);
		});
		return this.length;
	}

	/**
     * unshift the rest parameter of method unshift
     * @param value 
     */
	private unshiftArray(value: Array<T>) {
		for (let i = value.length - 1; i >= 0; i--) {
			this.unshift(value[i]);
		}
		return this.length;
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
     * 
     * @returns number - new length
     */
	push(value: T, ...rest: Array<T>) {
		// handle multiple arguments
		// e.g list.push(2, 3)
		if (rest.length > 0) {
			return this.pushArray([value, ...rest]);
		}

		const node = new ListNode<T>(value);
		if (this.length === 0) {
			this.head = node;
			this.tail = node;
		}

		this.tail.next = node;
		this.tail = node;

		this.length++;
		return this.length;
	}

	/**
   * 
   * @param value 
   * @param rest - Optional
   * 
   * @returns number - new length
   */
	unshift(value: T, ...rest: Array<T>) {
		// handle multiple arguments
		// e.g list.unshift(2, 3)
		if (rest.length > 0) {
			return this.unshiftArray([value, ...rest]);
		}
		const node = new ListNode<T>(value);
		if (this.length === 0) {
			this.head = node;
			this.tail = node;
		}

		node.next = this.head;
		this.head = node;

		this.length++;
		return this.length;
	}
}
