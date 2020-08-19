/**
 * Node for LinkedList
 * @public
 * @since 0.0.0
 */
export class ListNode<T> {
	/**
   * the value of the Node
   */
	value: T;

	/**
   * pointer to the next Node
   */
	next: ListNode<T> | null;

	/**
   * pointer to previous Node
   */
	prev: ListNode<T> | null;
	constructor(value: T) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}
/**
  * # LinkedList 
  * 
  * LinkedList are list-like objects whose prototype has methods to perform traversal and mutation operations.
  * the api is very similiar with standard `Array` in javascript.
  * but the collection of data elements whose order is not given by their physical placement in memory
  * Instead, each element points to the next and to the previous
  */
export class LinkedList<T> {
	/**
   * Total length of `LinkedList` element
   * ```ts
   * const list = new LinkedList(1, 2, 3);
   * list.length // 3
   * ```
   * @since 0.0.0-alpha
   */
	length: number;

	/**
   * the first `ListNode` of `LinkedList`
   * ```ts
   * const list = new LinkedList(1, 2, 3);
   * list.head.value // 1
   * list.head.next.value // 2
   * ```
   */
	head: ListNode<T> | null;

	/**
   * the last `ListNode` of `LinkedList`
   * ```ts
   * const list = new LinkedList(1, 2, 3);
   * list.tail.value // 3
   * ```
   * @since 0.0.0-alpha
   */
	tail: ListNode<T> | null;

	/**
   * ```ts
   * new LinkedList(1, 2, 3);
   * // LinkedList[1, 2, 3]
   * ```
   * @since 0.0.0-alpha
   * @param value 
   * @param rest 
   */
	constructor(value?: T, ...rest: Array<T>) {
		this.length = 0;
		this.head = null;
		this.tail = null;
		if (value) {
			this.push(value, ...rest);
		}
	}

	/**
	 * The `Array.from()` static method creates a new, shallow-copied Array instance from an array-like or iterable object
   * 
	 * ```ts
	 * LinkedList.from([1, 2, 3, "world"]);
   * // output LinkedList[1, 2, 3, "world"]
   * 
   * LinkedList.from("helloworld");
   * // output LinkedList["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"]
	 * ```
   * 
   * @public
   * @since 0.0.0-alpha
	 * @param value - Iterable Object
	 * @returns A new `LinkedList` instance
	 * 
	 */
	static from(value: string | object | Array<unknown>): LinkedList<unknown> {
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
	 * Determine wheter the given value is an `LinkedList`
   * 
   * ```ts
   * LinkedList.is([3, 2, 1]); // false
   * 
   * const list = new LinkedList(3, 2, 1);
   * LinkedList.is(list) // true
   * ```
   * 
   * @public
   * @since 0.0.0-alpha
   * @param value - the value to be checked
   * @returns - `true` if the value is an `LinkedList`; otherwise, `false`.
   * 
	 */
	static is(value: unknown): boolean {
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
   * @private
   * @since 0.0.0-alpha
   */
	private pushArray(value: Array<T>): number {
		value.forEach((n) => {
			this.push(n);
		});
		return this.length;
	}

	/**
   * unshift the rest parameter of method unshift
	 * @private
   * @returns number - new LinkedList length
   * @since 0.0.0-alpha
   */
	private unshiftArray(value: Array<T>): number {
		for (let i = value.length - 1; i >= 0; i--) {
			this.unshift(value[i]);
		}
		return this.length;
	}

	/**
   * clear all elements
   * ```ts
   * const list = new LinkedList(1, 2, 3);
   * list.clear();
   * list // LinkedList[]
   * ```
   * @since 0.0.0-alpha
   */
	clear() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	/**
   * Add one or more element to the end of an `LinkedList` and returns
   * the new length of the `LinkedList`
   * 
	 * ```ts
	 * const list = new LinkedList(1, 2);
	 * list.push(3, 4); // 4
   * list
   * // LinkedList[1, 2, 3, 4]
	 * ```
   * 
   * @public
   * @since 0.0.0-alpha
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
			this.tail = {...node};
		} else if (this.length === 1) {
			this.head.next = node;
			this.tail = this.head.next;
			this.tail.prev = this.head;
		} else {
			node.prev = this.tail;
			this.tail.next = node;
			this.tail = this.tail.next;
		}

		this.length++;
		return this.length;
	}

	/**
   * Add one or more element to the beginning of an `LinkedList` and returns
   * the new length of the `LinkedList`
   * 
   * ```ts
   * const list = new LinkedList(1, 2, 3);
   * list.unshift("first") // 4
   * list // LinkedList["first", 1, 2, 3]
   * 
   * list.unshift("very first", "second first"); // 6
   * list
   * // LinkedList["very first", "second first", "first", 1, 2, 3]
   * ```
   * 
   * @public
   * @since 0.0.0-alpha
   */
	unshift(value: T, ...rest: Array<T>) {
		// handle multiple arguments
		// e.g list.unshift(2, 3)
		if (rest.length > 0) {
			return this.unshiftArray([value, ...rest]);
		}
		const node = new ListNode<T>(value);
		if (this.length === 0) {
			this.head = {...node};
			this.tail = node;
		} else if (this.length === 1) {
			this.tail.prev = node;
			this.head = this.tail.prev;
			this.head.next = this.tail;
		} else {
			node.next = this.head;
			this.head.prev = node;
			this.head = this.head.prev;
		}

		this.length++;
		return this.length;
	}

	/**
   * Convert LinkedList into JavaScript Array
   * ```ts
   * const list = new LinkedList(1,2,3);
   * list.toArray(); // [1,2,3]
   * ```
   * 
   * @public
   * @since 0.0.0-alpha
   * @returns new instance of an `LinkedList`
   */
	toArray() {
		const arr = [];
		let currentNode = this.head;
		while (currentNode) {
			arr.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return arr;
	}

	/**
   * Concat Multiple `LinkedList` and return new instance of `LinkedList`
   * 
   * ```ts
   * const list = new LinkedList(1, 2);
   * const secondList = new LinkedList(3, 4);
   * const thirdList = new LinkedList(5, 6, 7);
   * 
   * list.concat(secondList);
   * // LinkedList[1, 2, 3, 4]
   * 
   * secondList.concat(list).concat(thirdList);
   * // LinkedList[3, 4, 1, 2, 5, 6, 7]
   * ```
   * 
   * @public
   * @since 0.0.0-alpha
   * @param value - `LinkedList` to be concat
   * @returns new instance of `LinkedList`
   */
	concat(value: LinkedList<T>): LinkedList<T> {
		if (!LinkedList.is(value)) {
			throw new TypeError("given parameter is not a valid LinkedList");
		}
		const current = this.toArray();
		const next = value.toArray();
		return new LinkedList(...[...current, ...next]);
	}

	/**
   * return the first element in the provided LinkedList that satisfies
   * the provided testing function
   * 
   * ```ts
   * const list = new LinkedList(1, 2, 3, 4, 5);
   * const found = list.find(element => element.value > 2);
   * console.log(found.value); // 3
   * ```
   * 
   * ### Notes
   * when it found an element, it will return the reference to the element/Node
   * modifying it will affect the original Node inside LinkedList
   * 
   * ```ts
   * const list = new LinkedList(1,2,3);
   * const found = list.find(element => element.value === 2);
   * found.value = "two";
   * 
   * console.log(list.toArray()); // [1, "two", 3];
   * ```
   * 
   * @since 0.0.2-alpha
   * @public
   * @param cb - function to execute on each element in the LinkedList, taking 3 arguments
   */
	find(
		cb: (
			element: ListNode<T>,
			index?: number,
			linkedList?: LinkedList<T>,
		) => boolean,
	): ListNode<T> | null {
		let currentNode = this.head;
		let idx = 0;
		while (currentNode) {
			if (cb(currentNode, idx, this)) {
				return currentNode;
			}

			currentNode = currentNode.next;
			idx++;
		}

		return null;
	}

	/**
   * The forEach() method executes a provided function once for each LinkedList element.
   * ```ts
   * const list = new LinkedList('a', 'b', 'c');
   * list.forEach(element => console.log(element.value));
   * // expected output: "a"
   * // expected output: "b"
   * // expected output: "c"
   * ```
   * 
   * @param cb - function to execute on each element in the LinkedList, taking 3 arguments
   */
	forEach(
		cb: (
			element: ListNode<T>,
			index?: number,
			linkedList?: LinkedList<T>,
		) => unknown,
	) {
		if (!cb || typeof cb !== "function") {
			throw new Error("a valid callback argument is required!");
		}

		let currentNode = this.head;
		let idx = 0;
		while (currentNode) {
			cb(currentNode, idx, this);
			idx++;
			currentNode = currentNode.next;
		}
	}
	/**
   * The pop() method removes the last element from an LinkedList and returns that element.
   * This method changes the length of the LinkedList.
   * ```ts
   * const plants = new LinkedList('broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato')
   * console.log(plants.pop().value);
   * // expected output: "tomato"
   * 
   * console.log(plants.toArray());
   * // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
   * 
   * plants.pop();
   * 
   * console.log(plants.toArray());
   * // expected output: Array ["broccoli", "cauliflower", "cabbage"]
   * ```
   * 
   * @public
   * @since 0.2.0-alpha
   */
	pop(): ListNode<T> | undefined {
		let poped = undefined;
		if (this.length === 0) {
			return poped;
		} else if (this.length === 1) {
			poped = this.head;
			this.length = 0;
			this.tail = null;
			this.head = null;
		} else {
			poped = this.tail;
			this.length--;
			this.tail = this.tail.prev;
			this.tail.next = null;
			poped.prev = null;
		}

		return poped;
	}

	/**
   * remove the first element on the LinkedList
   * ```ts
   * const list = new LinkedList(1,2,3);
   * list.shift();
   * console.log(list.toArray()); // [2, 3]
   * 
   * const emptyList = new LinkedList();
   * console.log(emptyList.shift()); // undefined
   * ```
   * 
   * @public
   * @since 0.1.2-alpha
   */
	shift(): ListNode<T> | undefined {
		let shifted = undefined;
		if (this.length === 1) {
			shifted = this.head;
			this.head = null;
			this.tail = null;
			this.length = 0;
		} else if (this.length > 1) {
			shifted = this.head;
			this.head = this.head.next;
			this.head.prev = null;
			this.length--;
			shifted.next = null;
		}

		return shifted;
	}
}
